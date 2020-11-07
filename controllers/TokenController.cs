//using System;
//using System.Collections.Generic;
//using System.IdentityModel.Tokens.Jwt;
//using System.Linq;
//using System.Security.Claims;
//using System.Text;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Identity;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.Extensions.Options;
//using Microsoft.IdentityModel.JsonWebTokens;
//using Microsoft.IdentityModel.Tokens;
//using PortfolioSiteAPI.Data;
//using PortfolioSiteAPI.Models;
//using JwtRegisteredClaimNames = System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames;

//namespace PortfolioSiteAPI.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class AuthController : BaseAPIController
//    {
//        TokenConfig _config;

//        public AuthController(ApplicationDbContext context,
//            UserManager<ApplicationUser> userManager, IOptions<TokenConfig> options) : base(context, userManager)
//        {
//            _config = options.Value;
//        }

//        [HttpPost]
//        [Route("signin")]
//        public async Task<IActionResult> Create(ValidationInputModel input)
//        {
//           if(await IsValidUsernameAndPassword(input.username, input.password))
//           {
//                return new OkObjectResult(await GetValidToken(input.username));
//           }
//           return Ok();
//        }

//        private async Task<dynamic> GetValidToken(string username)
//        {
//            var user = await _userManager.FindByEmailAsync(username);
//            var lastUserToken = await _context.Tokens
//              .Where(x => x.ApplicationUserId.Equals(user.Id) && x.Expired == false)
//              .OrderByDescending(x => x.DateIssued).Take(1).FirstOrDefaultAsync();

//            if (lastUserToken != null)
//            {

//                if (lastUserToken.ExpiryDate > DateTime.UtcNow)
//                {
//                    return new
//                    {
//                        Access_Token = lastUserToken.TokenValue,
//                        UserName = username
//                    };
//                }
//                else
//                {
//                    lastUserToken.Expired = true;
//                    await _context.SaveChangesAsync();
//                }
//            }

//            return await GenerateToken(username);
//        }
//        private async Task<bool> IsValidUsernameAndPassword(string username, string password)
//        {
//            var user = await _userManager.FindByEmailAsync(username);
//            if(user == null)
//            {
//                return false;
//            }
          
//            return await _userManager.CheckPasswordAsync(user, password);
//        }

//        private async Task<dynamic> GenerateToken(string username)
//        {
//            var user = await _userManager.FindByNameAsync(username);
//            var curUserRoles = from userRoles in _context.UserRoles
//                               join roles in _context.Roles on userRoles.RoleId equals roles.Id
//                               where userRoles.UserId == user.Id
//                               select new
//                               {
//                                   userRoles.UserId,
//                                   userRoles.RoleId,
//                                   roles.Name
//                               };

//            var basedate = DateTime.UtcNow;
//            var claims = new List<Claim>
//            {
//                new Claim(ClaimTypes.Name,username),
//                new Claim(ClaimTypes.NameIdentifier,user.Id),
//                new Claim(JwtRegisteredClaimNames.Nbf, new DateTimeOffset(basedate).ToUnixTimeSeconds().ToString()),
//                new Claim(JwtRegisteredClaimNames.Exp, new DateTimeOffset(basedate.AddDays(1)).ToUnixTimeSeconds().ToString())
//            };

//            foreach (var role in curUserRoles)
//            {
//                claims.Add(new Claim(ClaimTypes.Role, role.Name));
//            }


//            var token = new JwtSecurityToken(
//                new JwtHeader(
//                    new SigningCredentials(
//                        new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.TokenSecret)),
//                        SecurityAlgorithms.HmacSha256)),
//                        new JwtPayload(claims)
//                );

//            var output = new
//            {
//                Access_Token = new JwtSecurityTokenHandler().WriteToken(token),
//                UserName = username
//            };
//            _context.Tokens.Add(new Token()
//            {
//                TokenValue = output.Access_Token,
//                DateIssued = basedate,
//                ExpiryDate = basedate.AddDays(1),
//                ApplicationUserId = user.Id
//            });

//            await _context.SaveChangesAsync();
//            return output;
//        }
//    }
//}
