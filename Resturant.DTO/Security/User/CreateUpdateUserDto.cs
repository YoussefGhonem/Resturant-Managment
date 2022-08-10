using Bond.Enums;
using System.Collections.Generic;

namespace Resturant.DTO.Security.User
{
    public class CreateUpdateUserDto
    {
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; }
        public string Department { get; set; }
        public int RoleId { get; set; }
        public bool ReceiveEmail { get; set; }
    }
}
