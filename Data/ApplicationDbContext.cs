using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace PortfolioSiteAPI.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; }
        public DbSet<WorkExperience> WorkExperiences { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Token> Tokens { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Project>()
              .HasOne<ApplicationUser>(proj => proj.ApplicationUser)
              .WithMany(appuser => appuser.Projects)
              .HasForeignKey(proj => proj.ApplicationUserId);

            builder.Entity<Comment>()
              .HasOne<WorkExperience>(com => com.WorkExperience)
              .WithMany(we => we.Comments)
              .HasForeignKey(com => com.WorkExperienceId);

            builder.Entity<WorkExperience>()
              .HasOne<ApplicationUser>(we => we.ApplicationUser)
              .WithMany(appuser => appuser.WorkExperiences)
              .HasForeignKey(we => we.ApplicationUserId);

            builder.Entity<Token>()
              .HasOne<ApplicationUser>(to => to.ApplicationUser)
              .WithMany(appuser => appuser.Tokens)
              .HasForeignKey(we => we.ApplicationUserId);

            builder.Entity<WorkExperience>().HasIndex(x => x.OrderNumber);

            builder.Entity<Token>(eb =>
            {
                eb.Property(b => b.TokenValue).HasColumnType("varchar(max)");
            });

            builder.Entity<Token>().HasIndex(x => x.DateIssued);

            builder.Entity<Token>().HasIndex(x => x.Expired);

        }
    }
}
