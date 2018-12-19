using System;
using System.ComponentModel.DataAnnotations;

namespace PayrollApp.Models
{
    public class PayRoll
    {
        [Key]
        public int PayrollId { get; set; }
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
        public DateTime PayDate {get;set;}
        public float GrossPay {get;set;}
        public float Deductions {get;set;}
        public float NetPay {get;set;}
        public int UserId { get; set; }
        public User employee { get; set; }
    }
}