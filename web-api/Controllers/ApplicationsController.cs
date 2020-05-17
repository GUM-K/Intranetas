﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Entities;
using WebApi.Models.Application;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ApplicationsController : ControllerBase
    {
        private IApplicationService _applicationService;
        public ApplicationsController(IApplicationService appService)
        {
            _applicationService = appService;
        }
        [HttpPost("upload")]
        public IActionResult Create([FromForm] ApplicationTransfer model)
        {
            // do other validations on your model as needed
            if (model.PositionId != 0 && model.CV != null && model.Motivational != null)
            {
                _applicationService.AddApplication(model);

                //to do : Save uniqueFileName  to your db table   
            }
            // to do  : Return something
            return Ok();
        }
        [HttpGet("positions")]
        public IActionResult GetPositions()
        {
            var result = _applicationService.GetPositions();
            return Ok(result.ToList());
        }
        [HttpGet("{id}")]
        public IActionResult GetApplications(int id)
        {
            var result = _applicationService.GetMyApplications(id);
            return Ok(result.ToList());
        }
    }
}