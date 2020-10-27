using Microsoft.EntityFrameworkCore.Migrations;

namespace PortfolioSiteAPI.Migrations
{
    public partial class tokens : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Tokens_TokenValue",
                table: "Tokens");

            migrationBuilder.AlterColumn<string>(
                name: "TokenValue",
                table: "Tokens",
                type: "varchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "TokenValue",
                table: "Tokens",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(max)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tokens_TokenValue",
                table: "Tokens",
                column: "TokenValue");
        }
    }
}
