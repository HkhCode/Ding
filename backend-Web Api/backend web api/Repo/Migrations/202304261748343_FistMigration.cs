namespace Repo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FistMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "Ding.Branch",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BranchName = c.String(),
                        ZoneId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Ding.Zone", t => t.ZoneId, cascadeDelete: true)
                .Index(t => t.ZoneId);
            
            CreateTable(
                "Pub.User",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FullName = c.String(),
                        PersonellCode = c.String(),
                        NationalCode = c.String(),
                        BirthDate = c.DateTime(nullable: false),
                        BranchId = c.Int(nullable: false),
                        ProfileImage = c.Binary(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Ding.Branch", t => t.BranchId, cascadeDelete: true)
                .Index(t => t.BranchId);
            
            CreateTable(
                "Ding.Report",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        ReportDate = c.DateTime(nullable: false),
                        InTime = c.String(),
                        OutTime = c.String(),
                        WorkedTime = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Pub.User", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "Ding.Request",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        type = c.Int(nullable: false),
                        RequestDate = c.DateTime(nullable: false),
                        Status = c.Int(nullable: false),
                        Desciption = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Pub.User", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "Ding.Zone",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ZoneCode = c.Int(nullable: false),
                        ZoneName = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "Ding.InAndOut",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Time = c.DateTime(nullable: false),
                        InOrOut = c.Int(nullable: false),
                        UserId = c.Int(nullable: false),
                        TakePicture = c.Binary(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Pub.User", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("Ding.InAndOut", "UserId", "Pub.User");
            DropForeignKey("Ding.Branch", "ZoneId", "Ding.Zone");
            DropForeignKey("Ding.Request", "UserId", "Pub.User");
            DropForeignKey("Ding.Report", "UserId", "Pub.User");
            DropForeignKey("Pub.User", "BranchId", "Ding.Branch");
            DropIndex("Ding.InAndOut", new[] { "UserId" });
            DropIndex("Ding.Request", new[] { "UserId" });
            DropIndex("Ding.Report", new[] { "UserId" });
            DropIndex("Pub.User", new[] { "BranchId" });
            DropIndex("Ding.Branch", new[] { "ZoneId" });
            DropTable("Ding.InAndOut");
            DropTable("Ding.Zone");
            DropTable("Ding.Request");
            DropTable("Ding.Report");
            DropTable("Pub.User");
            DropTable("Ding.Branch");
        }
    }
}
