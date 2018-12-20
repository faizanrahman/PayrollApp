using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using PayrollApp.Data;
using PayrollApp.Models;

namespace PayrollApp.Controllers {
    [Route ("api/[controller]")]
    [ApiController]

    public class EmployeesController : ControllerBase {
        public DataContext _context;

        public EmployeesController (DataContext context) {
            _context = context;
        }

        // [HttpGet]
        // public ActionResult<IEnumerable<object>> Get () {
        //     return new object[] { 'name': "Binh", 'age': 12 };
        // }

        [HttpGet]
        public ActionResult <IEnumerable> Get () {

            var allEmployees = _context.Users.ToList();
            return allEmployees;
        }

        //create employee
        //url:api/employees
        [HttpPost]
        public void Post([FromBody] User employee)
        {
            User newEmployee = new User 
            {
                firstName = employee.firstName,
                lastName = employee.lastName,
                dob = employee.dob,
                exemptions = employee.exemptions,
                email = employee.email,
                password = employee.password,
                createdAt = DateTime.Now,
                updatedAt = DateTime.Now,
                DepartmentId = employee.DepartmentId,
                JobId = employee.JobId,
            }; 
                _context.Add(newEmployee);
                _context.SaveChanges();
            
            
        }

        [HttpGet("{id}")]
        public ActionResult <object> Get(int id)
        {
            var currentEmployee = _context.Users.FirstOrDefault(u=>u.UserId == id);
            System.Console.WriteLine(currentEmployee.firstName);
            System.Console.WriteLine(currentEmployee.lastName);
            System.Console.WriteLine(currentEmployee.UserId);
            return currentEmployee;
        } 


    }
}