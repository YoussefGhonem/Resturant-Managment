using Nest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resturant.Data.DbModels.BusinessSchema.About
{
    public class Team
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? JopTitle { get; set; }
        public string? Description { get; set; }
        public string? ImageUrl { get; set; }
        public AboutUs? About { get; set; }
        public Guid? AboutId { get; set; }
    }
}
