using Resturant.Core.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resturant.Data.DbModels.BusinessSchema.About
{
    [Table("AboutUs", Schema = "Business")]
    public class AboutUs : BaseEntity
    {
        public  Guid Id { get; set; }
        public string? Name { get; set; }
        public string? DecriptionAbout { get; set; }
        public bool? IsMain { get; set; }
        public ICollection<Team>? Teams { get; set; }
    }
}
