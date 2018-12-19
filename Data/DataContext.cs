using Microsoft.EntityFrameworkCore;
using PayrollApp.Models;

namespace PayrollApp.Data {
    public class DataContext : DbContext {
        public DataContext (DbContextOptions<DataContext> options) : base (options) { }
        // Place DbSets for entitites here.
        public DbSet<User> Users { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<Salary> Salaries { get; set; }
        public DbSet<PayRoll> Payrolls { get; set; }

        protected override void OnModelCreating (ModelBuilder modelBuilder) {
            modelBuilder.Entity<User> ()
                .Property (u => u.admin)
                .HasDefaultValue (0);
        }
    }

}
