using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace AspGalleryAPI.Models;

public partial class AppDbContext : DbContext
{
    public AppDbContext()
    {
    }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Picture> PicturesDB { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)

        => optionsBuilder.UseMySql("server=localhost;database=aspgallery;uid=*******;pwd=*****", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.23-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Picture>(entity =>
        {
            entity.HasKey(e => e.IdPicture).HasName("PRIMARY");

            entity.ToTable("pictures");

            entity.Property(e => e.IdPicture).HasColumnName("ID_PICTURE");
            entity.Property(e => e.BlobPicture)
                .IsRequired()
                .HasColumnType("blob")
                .HasColumnName("BLOB_PICTURE");
            entity.Property(e => e.InsertedDate)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("timestamp")
                .HasColumnName("INSERTED_DATE");
            entity.Property(e => e.NamePicture)
                .IsRequired()
                .HasMaxLength(255)
                .HasColumnName("NAME_PICTURE");
            entity.Property(e => e.SizePicture)
                .HasPrecision(10)
                .HasColumnName("SIZE_PICTURE");
            entity.Property(e => e.TypePicture)
                .IsRequired()
                .HasMaxLength(255)
                .HasColumnName("TYPE_PICTURE");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
