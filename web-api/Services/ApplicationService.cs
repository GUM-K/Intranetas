using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Entities;
using WebApi.Helpers;
using WebApi.Models.Application;

namespace WebApi.Services
{
    public interface IApplicationService
    {
        public Application AddApplication(ApplicationTransfer model);
        public ICollection<Position> GetPositions();
        public ICollection<Application> GetMyApplications(int userId);
    }
    public class ApplicationService : IApplicationService
    {
        private DataContext _context;
        private readonly IWebHostEnvironment hostingEnvironment;

        public ApplicationService(IWebHostEnvironment environment, DataContext context)
        {
            _context = context;
            hostingEnvironment = environment;
        }

        public Application AddApplication(ApplicationTransfer model)
        {
            var uniqueCVFileName = GetUniqueFileName(model.CV.FileName);
            var uniqueMotivationalFileName = GetUniqueFileName(model.Motivational.FileName);
            var uniqueAdditionalInfoName = GetUniqueFileName("AdditionalInfo") + ".txt";

            var uploads = Path.Combine(hostingEnvironment.ContentRootPath, "uploads");
            Directory.CreateDirectory(uploads);

            var cvFilePath = Path.Combine(uploads, uniqueCVFileName);
            var motivationalFilePath = Path.Combine(uploads, uniqueMotivationalFileName);
            var additionalFilePath = Path.Combine(uploads, uniqueAdditionalInfoName);

            model.CV.CopyTo(new FileStream(cvFilePath, FileMode.Create));
            model.Motivational.CopyTo(new FileStream(motivationalFilePath, FileMode.Create));
            using (StreamWriter outputFile = new StreamWriter(additionalFilePath))
            {
                outputFile.WriteLine(model.AdditionalInfo);
            }

            var user = _context.Users.FirstOrDefault(x => x.Id == model.UserId);
            var pos = _context.Positions.FirstOrDefault(x => x.Id == model.PositionId);

            var applic = new Application
            {
                UserId = model.UserId,
                PositionId = model.PositionId,
                Status = "Applied"
            };

            if (user != null && pos != null)
            {
                _context.Applications.Add(applic);
                _context.SaveChanges();
            }

            return applic;
        }

        public ICollection<Position> GetPositions()
        {
            var positions = _context.Positions.ToList();

            return positions;
        }

        public ICollection<Application> GetMyApplications(int userId)
        {
            var applications = _context.Applications.Where(x => x.UserId == userId).ToList();

            return applications;
        }
        private string GetUniqueFileName(string fileName)
        {
            fileName = Path.GetFileName(fileName);
            return Path.GetFileNameWithoutExtension(fileName)
                      + "_"
                      + Guid.NewGuid().ToString().Substring(0, 4)
                      + Path.GetExtension(fileName);
        }
    }
}
