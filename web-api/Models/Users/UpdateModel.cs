using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Users
{
  public class UpdateModel
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public int ChangePassword { get; set; }
        public string Token { get; set; }
    }
}