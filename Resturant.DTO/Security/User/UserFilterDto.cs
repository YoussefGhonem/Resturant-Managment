using Bond.Core.Common;

namespace Resturant.DTO.Security.User
{
    public class UserFilterDto : BaseFilterDto
    {
        public string Email { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public string Address { get; set; }
        public string Status { get; set; } // Active, NotActive
        public int? RoleId { get; set; }
        public bool? IsLocked { get; set; }
    }
}
