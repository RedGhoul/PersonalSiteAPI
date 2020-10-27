using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using PortfolioSiteAPI.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioSiteAPI
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class AuthorizeJwtAttribute : Attribute, IAuthorizationFilter
    {
        public string AllowNoAuth { get; set; } = "";

        public void OnAuthorization(AuthorizationFilterContext context)
        {
            if(context.HttpContext.Request.Path.Value.Equals(AllowNoAuth) == true && context.HttpContext.Request.Method == "GET")
            {
                return;
            }


                var user = (ApplicationUser)context.HttpContext.Items["User"];

                if (user == null)
                {
                    // not logged in
                    context.Result = new JsonResult(new { message = "Unauthorized" }) { StatusCode = StatusCodes.Status401Unauthorized };
                    
                }
               
            
        }
    }
}
