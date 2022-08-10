using Bond.Core.Common;
using System.Collections.Generic;

namespace Resturant.DTO.Security.User
{
    public class UserAuditDto : AuditDto
    {
        public string PersonalImagePath { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; }
        public bool IsLocked { get; set; }
        public string Department { get; set; }
        public string Address { get; set; }
        public string Status { get; set; }
        public bool ReceiveEmail { get; set; }
        public string DisplayRoles { get; set; }
    }
}
