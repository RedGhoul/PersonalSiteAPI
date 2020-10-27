using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PortfolioSiteAPI.Controllers.Admin
{
    [Authorize()]
    public class AdminHomeController : Controller
    {
        // GET: AdminHomeController
        public ActionResult Index()
        {
            return View();
        }

    }
}
