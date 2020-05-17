using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations.SqliteMigrations
{
    public partial class AddPositionsMockedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Positions",
                columns: new[] { "Name", "Pay", "HoursPerDay", "Requirements" },
                values: new object[] { "Back End Developer", "2500", "8", "IT bachelor degree, 2 years of experience in this field" });
            migrationBuilder.InsertData(
                table: "Positions",
                columns: new[] { "Name", "Pay", "HoursPerDay", "Requirements" },
                values: new object[] { "Data Analyst", "2000", "8", "Bachelor degree in analytical field" });
            migrationBuilder.InsertData(
                table: "Positions",
                columns: new[] { "Name", "Pay", "HoursPerDay", "Requirements" },
                values: new object[] { "Tester", "1800", "6", "IT bachelor degree, any experience in this field" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
