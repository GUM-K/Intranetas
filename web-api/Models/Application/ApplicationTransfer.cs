using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models.Application
{
    public class ApplicationTransfer
    {
        public IFormFile CV { get; set; }
        public IFormFile Motivational { get; set; }
        public string AdditionalInfo { get; set; }
        public int PositionId { get; set; }
        public int UserId { get; set; }
    }
}
