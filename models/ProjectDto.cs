using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioSiteAPI.Models
{
    public class ProjectDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Tag_Line { get; set; }
        public string Url_Github { get; set; }
        public string Url_Live { get; set; }
        public bool Can_Show { get; set; }
    }
}
