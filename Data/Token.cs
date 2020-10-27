using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioSiteAPI.Data
{
    public class Token
    {
        public int Id { get; set; }

        public string TokenValue { get; set; }
        public DateTime DateIssued { get; set; }
        public DateTime ExpiryDate { get; set; }
        public bool Expired { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
        public string ApplicationUserId { get; set; }
    }
}
