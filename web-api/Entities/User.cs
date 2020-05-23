using System;

namespace WebApi.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime WorkingSince { get; set; }
        public int ChangePassword { get; set; }
        public int PositionId { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public virtual Position Position { get; set; }
    }
}