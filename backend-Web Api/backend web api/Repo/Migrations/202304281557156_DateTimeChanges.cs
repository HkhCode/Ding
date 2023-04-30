namespace Repo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DateTimeChanges : DbMigration
    {
        public override void Up()
        {
            AlterColumn("Ding.VacationRequest", "CreatedDate", c => c.DateTime(nullable: false, precision: 7, storeType: "datetime2"));
            AlterColumn("Ding.VacationRequest", "RequestedDate", c => c.DateTime(nullable: false, precision: 7, storeType: "datetime2"));
        }
        
        public override void Down()
        {
            AlterColumn("Ding.VacationRequest", "RequestedDate", c => c.DateTime(nullable: false));
            AlterColumn("Ding.VacationRequest", "CreatedDate", c => c.DateTime(nullable: false));
        }
    }
}
