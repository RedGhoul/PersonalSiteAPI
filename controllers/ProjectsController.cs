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
    [AuthorizeJwtAttribute(AllowNoAuth = "/api/projects")]
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

        // GET: api/Projects/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProjectDto>> GetProject(int id)
        {
            var curUser = await GetCurrentUser();
            var project = await _context.Projects.Where(
                x => x.ApplicationUserId.Equals(curUser.Id) && x.Id == id
                ).FirstOrDefaultAsync();

            if (project == null)
            {
                return NotFound();
            }
            var dto = _mapper.Map<ProjectDto>(project);
            return dto;
        }

        // PUT: api/Projects/5
        [HttpPost("update/{id}")]
        public async Task<IActionResult> PutProject(int id, ProjectDto projectDto)
        {
            var project = _mapper.Map<Project>(projectDto);

            if (id != project.Id)
            {
                return BadRequest();
            }
            var curUser = await GetCurrentUser();
            project.ApplicationUserId = curUser.Id;
            _context.Entry(project).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Projects
        [HttpPost("create")]
        public async Task<ActionResult<Project>> PostProject(ProjectDto projectDto)
        {
            var proj = _mapper.Map<Project>(projectDto);
            var curUser = await GetCurrentUser();
            proj.ApplicationUserId = curUser.Id;
            _context.Projects.Add(proj);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProject", new { id = proj.Id }, projectDto);
        }

        // DELETE: api/Projects/5
        [HttpDelete("delete/{id}")]
        public async Task<ActionResult<Project>> DeleteProject(int id)
        {
            var project = await _context.Projects.FindAsync(id);
            if (project == null)
            {
                return NotFound();
            }

            _context.Projects.Remove(project);
            await _context.SaveChangesAsync();

            return project;
        }

        private bool ProjectExists(int id)
        {
            return _context.Projects.Any(e => e.Id == id);
        }
    }
}
