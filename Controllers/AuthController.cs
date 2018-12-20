using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PayrollApp.Data;
using PayrollApp.Dtos;
using PayrollApp.Models;

namespace PayrollApp.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase {
        // private object _context;
        private DataContext _context;
        public AuthController (DataContext context) {
            _context = context;
        }
        // ---------------------- L O G I N -------------------
        [HttpPost ("login")]
        public IActionResult Login (UserForLoginDto form) {
            System.Console.WriteLine (form.Email);
            System.Console.WriteLine (form.Password);
            System.Console.WriteLine ("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

            var response = new {
                name = "fsfasfaf",
                email = "fdjaslkj@cd.com"
            };
            int status = 1;

            var user = _context.Users.FirstOrDefault (u => u.email == form.Email);
            if (user == null) {
                System.Console.WriteLine ("Login failed");
                return BadRequest (status);
            } else {
                System.Console.WriteLine (user.UserId);
                System.Console.WriteLine (user.firstName);
                // User user = _context.Users.FirstOrDefault(u=>u.Email == form.email);
                
                return Ok (user);
            }

            // if(!ModelState.IsValid)
            // {
            //    return "Value is " + id;
            // }
            // User userinDB = _context.Users.FirstOrDefault(u=>u.Email == LoginUser.LoginEmail);

            // if(userinDB is null)
            // {
            //     ModelState.AddModelError("Email","Invalid Email");
            //     return View("Index");
            // }

            // PasswordHasher<LoginViewModel> hasher = new PasswordHasher<LoginViewModel> ();
            // var result = hasher.VerifyHashedPassword (LoginUser, userinDB.Password, LoginUser.LoginPassword);
            // if (result == 0)
            // {
            //     ModelState.AddModelError ("LoginEmail", "Invalid Login");
            //     return View ("Index");
            // }
            // User loggedIn = _context.Users.FirstOrDefault (u => u.Email == LoginUser.LoginEmail);

            // HttpContext.Session.SetInt32 ("ID", loggedIn.UserID);
            // HttpContext.Session.SetString("UserName", loggedIn.FirstName);
            // HttpContext.Session.SetString("Login", "true");
            // return RedirectToAction("Home");
        }

    }
}
//  ---------------------- L O G O U T -------------------
// [HttpGet("{logout}")]
// public IActionResult Logout()
// {
//     HttpContext.Session.Clear();
//     return RedirectToAction("Index");
// }