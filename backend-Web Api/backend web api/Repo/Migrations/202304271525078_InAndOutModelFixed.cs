namespace Repo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InAndOutModelFixed : DbMigration
    {
        public override void Up()
        {
            AddColumn("Ding.InAndOut", "Date", c => c.DateTime(nullable: false));
            AlterColumn("Ding.InAndOut", "Time", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("Ding.InAndOut", "Time", c => c.DateTime(nullable: false));
            DropColumn("Ding.InAndOut", "Date");
        }
    }
}
