﻿using Microsoft.AspNetCore.Http;

namespace Resturant.Data.DbModels.BusinessSchema
{
    public class CreateUpdatePressDto
    {
        public string? Title { get; set; }
        public string ?Description { get; set; }
        public string ?HyperLink { get; set; }
        public IFormFile Image { get; set; }

    }
}
