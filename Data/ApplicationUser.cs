using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioSiteAPI.Data
{
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser()
        {
            this.CreatedDate = DateTime.UtcNow;
        }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ICollection<Token> Tokens { get; set; }
        public ICollection<Project> Projects { get; set; }
        public ICollection<WorkExperience> WorkExperiences { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
