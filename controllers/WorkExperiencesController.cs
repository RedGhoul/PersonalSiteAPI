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
                x => x.ApplicationUserId.Equals(curUser.Id)).OrderBy(x => x.OrderNumber).ToListAsync();
            var dto = _mapper.Map<ICollection<WorkExperienceDto>>(workExperinces);

            foreach (var item in dto)
            {
                var comments = await _context.Comments.Where(c => c.WorkExperienceId == item.Id).ToListAsync();
                
                item.Comments = comments;
            }

            return new ObjectResult(dto);
        }

       

        private bool WorkExperienceExists(int id)
        {
            return _context.WorkExperiences.Any(e => e.Id == id);
        }
    }
}
