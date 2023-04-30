namespace Repo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AllRequestModelsDateChanged : DbMigration
    {
        public override void Up()
        {
            AlterColumn("Ding.InAndOutRequest", "CreatedDate", c => c.DateTime(nullable: false, precision: 7, storeType: "datetime2"));
            AlterColumn("Ding.InAndOutRequest", "RequestedDate", c => c.DateTime(nullable: false, precision: 7, storeType: "datetime2"));
            AlterColumn("Ding.MissionRequest", "CreatedDate", c => c.DateTime(nullable: false, precision: 7, storeType: "datetime2"));
            AlterColumn("Ding.MissionRequest", "RequestedDate", c => c.DateTime(nullable: false, precision: 7, storeType: "datetime2"));
        }
        
        public override void Down()
        {
            AlterColumn("Ding.MissionRequest", "RequestedDate", c => c.DateTime(nullable: false));
            AlterColumn("Ding.MissionRequest", "CreatedDate", c => c.DateTime(nullable: false));
            AlterColumn("Ding.InAndOutRequest", "RequestedDate", c => c.DateTime(nullable: false));
            AlterColumn("Ding.InAndOutRequest", "CreatedDate", c => c.DateTime(nullable: false));
        }
    }
}
