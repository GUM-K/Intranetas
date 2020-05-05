using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models.Application;

namespace WebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ApplicationsController : ControllerBase
    {
        private readonly IWebHostEnvironment hostingEnvironment;
        public ApplicationsController(IWebHostEnvironment environment)
        {
            hostingEnvironment = environment;
        }
        [HttpPost("upload")]
        public IActionResult Create([FromForm] ApplicationTransfer model)
        {
            // do other validations on your model as needed
            if (model.CV != null && model.Motivational != null)
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

                //to do : Save uniqueFileName  to your db table   
            }
            // to do  : Return something
            return Ok();
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