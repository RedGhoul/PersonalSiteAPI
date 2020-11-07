using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioSiteAPI.Data;
using PortfolioSiteAPI.Models;

namespace PortfolioSiteAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : BaseAPIController
    {
        private readonly IMapper _mapper;
        public ProjectsController(IMapper mapper, ApplicationDbContext context,
            UserManager<ApplicationUser> userManager) : base(context, userManager)
        {
            _mapper = mapper;
        }


        // GET: api/Projects
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
        {
            var curUser = await GetCurrentUser();
            if(curUser == null)
            {
                curUser = await _context.Users.FirstOrDefaultAsync();
            }
            var projects = await _context.Projects.Where(
                x => x.ApplicationUserId.Equals(curUser.Id)).ToListAsync();
            var dtos = _mapper.Map<ICollection<ProjectDto>>(projects);

            return new ObjectResult(dtos);
        }

        

        private bool ProjectExists(int id)
        {
            return _context.Projects.Any(e => e.Id == id);
        }
    }
}
