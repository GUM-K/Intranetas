using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Users
{
  public class UpdateModel
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        public int ChangePassword { get; set; }
    }
}