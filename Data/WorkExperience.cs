using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioSiteAPI.Data
{
    public class WorkExperience
    {
        public WorkExperience()
        {
            Comments = new List<Comment>();
        }

        public int Id { get; set; }
        public string Company_Name { get; set; }
        public string Postion_Name { get; set; }
        public DateTime Date { get; set; }
        public int OrderNumber { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
        public string ApplicationUserId { get; set; }
    }
}
