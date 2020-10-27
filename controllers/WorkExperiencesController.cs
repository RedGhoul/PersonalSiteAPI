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
    [AuthorizeJwtAttribute(AllowNoAuth = "/api/workexperiences")]
    public class WorkExperiencesController : BaseAPIController
    {
        private readonly IMapper _mapper;
        public WorkExperiencesController(IMapper mapper, ApplicationDbContext context,
            UserManager<ApplicationUser> userManager) : base(context, userManager)
        {
            _mapper = mapper;
        }

        // GET: api/WorkExperiences
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<ICollection<WorkExperienceDto>>> GetWorkExperiences()
        {
            var curUser = await GetCurrentUser();
            if (curUser == null)
            {
                curUser = await _context.Users.FirstOrDefaultAsync();
            }
            var workExperinces = await _context.WorkExperiences.Where(
                x => x.ApplicationUserId.Equals(curUser.Id)).ToListAsync();
            var dto = _mapper.Map<ICollection<WorkExperienceDto>>(workExperinces);

            foreach (var item in dto)
            {
                var comments = await _context.Comments.Where(c => c.WorkExperienceId == item.Id).ToListAsync();
                
                item.Comments = comments;
            }

            return new ObjectResult(dto);
        }

        // GET: api/WorkExperiences/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WorkExperienceDto>> GetWorkExperience(int id)
        {
            var curUser = await GetCurrentUser();
            var workExperience = await _context.WorkExperiences.Include(x => x.Comments).Where(
                x => x.ApplicationUserId.Equals(curUser.Id) && x.Id == id)
                .FirstOrDefaultAsync();

            if (workExperience == null)
            {
                return NotFound();
            }
            var dto = _mapper.Map<WorkExperienceDto>(workExperience);
            return dto;
        }

        // PUT: api/WorkExperiences/5
        [HttpPost("update/{id}")]
        public async Task<IActionResult> PutWorkExperience(int id, WorkExperienceDto WorkExperienceDto)
        {
            var workExperince = _mapper.Map<WorkExperience>(WorkExperienceDto);
            if (id != workExperince.Id)
            {
                return BadRequest();
            }
            var curUser = await GetCurrentUser();
            workExperince.ApplicationUserId = curUser.Id;
            _context.Entry(workExperince).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkExperienceExists(id))
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

        // POST: api/WorkExperiences
        [HttpPost("create")]
        public async Task<ActionResult<WorkExperience>> PostWorkExperience(WorkExperienceDto WorkExperienceDto)
        {
            var workex = _mapper.Map<WorkExperience>(WorkExperienceDto);
            var curUser = await GetCurrentUser();
            workex.ApplicationUserId = curUser.Id;
            _context.WorkExperiences.Add(workex);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkExperience", new { id = workex.Id }, WorkExperienceDto);
        }

        // DELETE: api/WorkExperiences/5
        [HttpDelete("delete/{id}")]
        public async Task<ActionResult<WorkExperience>> DeleteWorkExperience(int id)
        {
            var workExperience = await _context.WorkExperiences.FindAsync(id);
            if (workExperience == null)
            {
                return NotFound();
            }

            _context.WorkExperiences.Remove(workExperience);
            await _context.SaveChangesAsync();

            return workExperience;
        }

        private bool WorkExperienceExists(int id)
        {
            return _context.WorkExperiences.Any(e => e.Id == id);
        }
    }
}
