using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace GameRepository.DataObjects
{
    public partial class gamestoredbContext : DbContext
    {
        public gamestoredbContext()
        {
        }

        public gamestoredbContext(DbContextOptions<gamestoredbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admins { get; set; } = null!;
        public virtual DbSet<Contactuser> Contactusers { get; set; } = null!;
        public virtual DbSet<Game> Games { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySQL("server=localhost;port=3306;user=root;password=shivam;database=gamestoredb");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Admin>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PRIMARY");

                entity.ToTable("admins");

                entity.Property(e => e.Email)
                    .HasMaxLength(40)
                    .HasColumnName("email");

                entity.Property(e => e.Pass)
                    .HasMaxLength(50)
                    .HasColumnName("pass");
            });

            modelBuilder.Entity<Contactuser>(entity =>
            {
                entity.HasKey(e => e.UserEmail)
                    .HasName("PRIMARY");

                entity.ToTable("contactuser");

                entity.Property(e => e.UserEmail)
                    .HasMaxLength(40)
                    .HasColumnName("userEmail");

                entity.Property(e => e.Message)
                    .HasMaxLength(100)
                    .HasColumnName("message");

                entity.Property(e => e.Reply)
                    .HasMaxLength(100)
                    .HasColumnName("reply");

                entity.Property(e => e.Title)
                    .HasMaxLength(50)
                    .HasColumnName("title");
            });

            modelBuilder.Entity<Game>(entity =>
            {
                entity.ToTable("games");

                entity.Property(e => e.GameId)
                    .HasMaxLength(40)
                    .HasColumnName("gameId");

                entity.Property(e => e.Category)
                    .HasMaxLength(45)
                    .HasColumnName("category");

                entity.Property(e => e.DownloadLink)
                    .HasMaxLength(100)
                    .HasColumnName("downloadLink");

                entity.Property(e => e.Downloads).HasColumnName("downloads");

                entity.Property(e => e.GameDesc)
                    .HasMaxLength(100)
                    .HasColumnName("gameDesc");

                entity.Property(e => e.GameImage).HasColumnName("gameImage");

                entity.Property(e => e.GameName)
                    .HasMaxLength(30)
                    .HasColumnName("gameName");

                entity.Property(e => e.Popular).HasColumnName("popular");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.RatedAge).HasColumnName("ratedAge");

                entity.Property(e => e.Rating).HasColumnName("rating");

                entity.Property(e => e.Recommended).HasColumnName("recommended");

                entity.Property(e => e.Topchart)
                    .HasColumnName("topchart")
                    .HasDefaultValueSql("'0'");

                entity.HasMany(d => d.Useremails)
                    .WithMany(p => p.Games)
                    .UsingEntity<Dictionary<string, object>>(
                        "Installedgame",
                        l => l.HasOne<User>().WithMany().HasForeignKey("Useremail").HasConstraintName("fk_uemail"),
                        r => r.HasOne<Game>().WithMany().HasForeignKey("GameId").HasConstraintName("fk_gid"),
                        j =>
                        {
                            j.HasKey("GameId", "Useremail").HasName("PRIMARY");

                            j.ToTable("installedgames");

                            j.HasIndex(new[] { "GameId" }, "fk_gid_idx");

                            j.HasIndex(new[] { "Useremail" }, "fk_uemail_idx");

                            j.IndexerProperty<string>("GameId").HasMaxLength(40).HasColumnName("gameId");

                            j.IndexerProperty<string>("Useremail").HasMaxLength(40).HasColumnName("useremail");
                        });
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.UserEmail)
                    .HasName("PRIMARY");

                entity.ToTable("user");

                entity.Property(e => e.UserEmail)
                    .HasMaxLength(40)
                    .HasColumnName("userEmail");

                entity.Property(e => e.UserName)
                    .HasMaxLength(30)
                    .HasColumnName("userName");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
