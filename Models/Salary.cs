using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PayrollApp.Models
{
    public class Salary
    {
        [Key]
        public int SalaryId{get;set;}
        public float Amount{get;set;}
        public int JobId {get;set;}
        public Job JobTitle{get;set;}
    }
}