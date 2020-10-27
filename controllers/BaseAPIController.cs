using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PortfolioSiteAPI.Data;

namespace PortfolioSiteAPI.Controllers
{
    public class BaseAPIController : Controller
    {
        public readonly ApplicationDbContext _context;
        public readonly UserManager<ApplicationUser> _userManager;
        public BaseAPIController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task<ApplicationUser> GetCurrentUser()
        {
            var user = (ApplicationUser)HttpContext.Items["User"];
            if (user == null) return null;
            return await _userManager.FindByIdAsync(user.Id);
        }
    }
}
