using PortfolioSiteAPI.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioSiteAPI.Models
{
    public class WorkExperienceDto
    {
        public int Id { get; set; }
        public string Company_Name { get; set; }
        public string Postion_Name { get; set; }
        public string Date { get; set; }
        public int OrderNumber { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}
