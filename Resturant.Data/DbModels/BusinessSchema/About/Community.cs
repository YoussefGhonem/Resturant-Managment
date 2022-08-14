using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resturant.Data.DbModels.BusinessSchema.About
{
    public class Community
    {
        public Guid Id { get; set; }
        public string? name { get; set; }
        public string? Desciption { get; set; }
        public string? ImageUrl { get; set; }
        public bool? IsMain { get; set; }
    }
}
