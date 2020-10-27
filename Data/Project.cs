using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioSiteAPI.Data
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Tag_Line { get; set; }
        public string Url_Github { get; set; }
        public string Url_Live { get; set; }
        public bool Can_Show { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
        public string ApplicationUserId { get; set; }
    }
}
