using Resturant.Core.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resturant.Data.DbModels.BusinessSchema
{
    [Table("Gallery", Schema = "Business")]
    public class Gallery : BaseEntity
    {
        public new Guid Id { get; set; }
        public string? Name { get; set; }
        public string? ImageUrl { get; set; }
    }
}
