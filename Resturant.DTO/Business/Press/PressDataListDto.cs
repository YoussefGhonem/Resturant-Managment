using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resturant.DTO.Business.Press
{
    public class PressDataListDto
    {
        public Guid Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? HyperLink { get; set; }
        // file info
        public string? AttachmentName { get; }
        public string? AttachmentPath { get; }
        public string? AttachmentExtension { get; }
    }
}
