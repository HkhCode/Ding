namespace Repo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangedRequestModels : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Ding.Request", "UserId", "Pub.User");
            DropIndex("Ding.Request", new[] { "UserId" });
            CreateTable(
                "Ding.InAndOutRequest",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        Description = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                        RequestedDate = c.DateTime(nullable: false),
                        Time = c.String(),
                        Type = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Pub.User", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "Ding.MissionRequest",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        Description = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                        RequestedDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Pub.User", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "Ding.VacationRequest",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        RequestedDate = c.DateTime(nullable: false),
                        Description = c.String(),
                        Type = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Pub.User", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            DropTable("Ding.Request");
        }
        
        public override void Down()
        {
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
                .PrimaryKey(t => t.Id);
            
            DropForeignKey("Ding.VacationRequest", "UserId", "Pub.User");
            DropForeignKey("Ding.MissionRequest", "UserId", "Pub.User");
            DropForeignKey("Ding.InAndOutRequest", "UserId", "Pub.User");
            DropIndex("Ding.VacationRequest", new[] { "UserId" });
            DropIndex("Ding.MissionRequest", new[] { "UserId" });
            DropIndex("Ding.InAndOutRequest", new[] { "UserId" });
            DropTable("Ding.VacationRequest");
            DropTable("Ding.MissionRequest");
            DropTable("Ding.InAndOutRequest");
            CreateIndex("Ding.Request", "UserId");
            AddForeignKey("Ding.Request", "UserId", "Pub.User", "Id", cascadeDelete: true);
        }
    }
}
