namespace Repo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class firstmigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Security Keys",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        SelectedChars = c.String(),
                        SwitchingIndexesKeys = c.String(),
                        SwitchingIndexesValues = c.String(),
                        RegisteredTime = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Security Keys");
        }
    }
}
