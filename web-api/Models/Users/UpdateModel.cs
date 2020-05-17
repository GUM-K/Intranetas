using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Users
{
  public class UpdateModel
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public int PositionId { get; set; }
        public int ChangePassword { get; set; }
    }
}