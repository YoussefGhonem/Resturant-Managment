using System;

namespace Resturant.Core.Common
{
    public class DefaultIdAuditableEntityDto
    {
        public int Id { get; set; }
        public int CreatedBy { get; set; }
        public string Creator { get; set; }
        public DateTime CreatedOn { get; set; }
        public int? UpdatedBy { get; set; }
        public string Updator { get; set; }
        public DateTime? UpdatedOn { get; set; }
    }
}
