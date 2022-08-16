using Resturant.Core.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resturant.Data.DbModels.BusinessSchema
{
    [Table("ConntactUs", Schema = "Business")]
    public class ConntactUs : BaseEntity
    {
        public new Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? TouchAbout { get; set; }
        public string? Massage { get; set; }
    }
}
