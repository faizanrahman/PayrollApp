using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PayrollApp.ViewModels.LoginViewModel;

namespace PayrollApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private object _context;

        // // GET api/values
        // [HttpGet]
        // public ActionResult<IEnumerable<string>> Get()
        // {
        //     return new string[] { "value1", "value2" };
        // }


        // ---------------------- L O G I N -------------------

        [HttpPost]
        public IActionResult Login(LoginViewModel LoginUser) 
        {
            if(!ModelState.IsValid)
            {
               return View("Index");
            }
            User userinDB = _context.Users.FirstOrDefault(u=>u.Email == LoginUser.LoginEmail);
            
            if(userinDB is null)
            {
                ModelState.AddModelError("Email","Invalid Email");
                return View("Index");
            }

            PasswordHasher<LoginViewModel> hasher = new PasswordHasher<LoginViewModel> ();
            var result = hasher.VerifyHashedPassword (LoginUser, userinDB.Password, LoginUser.LoginPassword);
            if (result == 0)
            {
                ModelState.AddModelError ("LoginEmail", "Invalid Login");
                return View ("Index");
            }
            User loggedIn = _context.Users.FirstOrDefault (u => u.Email == LoginUser.LoginEmail);
            
            HttpContext.Session.SetInt32 ("ID", loggedIn.UserID);
            HttpContext.Session.SetString("UserName", loggedIn.FirstName);
            HttpContext.Session.SetString("Login", "true");
            return RedirectToAction("Home");
        }
         // ---------------------- L O G O U T -------------------
        [HttpGet("{logout}")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
    }
}

