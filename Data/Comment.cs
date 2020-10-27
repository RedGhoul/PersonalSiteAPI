using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioSiteAPI.Data
{
    public class Comment
    {
        public int Id { get; set; }
        public string Value { get; set; }
        [JsonIgnore]
        public WorkExperience WorkExperience { get; set; }
        public int WorkExperienceId { get; set; }
    }
}
