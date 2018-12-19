using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PayrollApp.Models {
    public class User {
        [Key]
        public int UserId { get; set; }

        [Required]
        public string firstName { get; set; }

        [Required]
        public string lastName { get; set; }

        [Required]
        public DateTime dob { get; set; }

        [Required]
        public int exemptions { get; set; }

        [Required]
        public int admin { get; set; }

        [Required]
        public string email { get; set; }

        [Required]
        public string password { get; set; }

        public DateTime createdAt { get; set; }
        public DateTime updatedAt { get; set; }
        public int DepartmentId { get; set; }
        public Department department { get; set; }
        public int JobId { get; set; }
        public Job Position { get; set; }
        public List<PayRoll> payRolls { get; set; }
    }
}