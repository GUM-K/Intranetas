namespace WebApi.Models.Users
{
  public class UserModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public int ChangePassword { get; set; }
        public int PositionId { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}