using System;
using System.Collections.Generic;

namespace GameRepository.DataObjects
{
    public partial class Admin
    {
        public string Email { get; set; } = null!;
        public string? Pass { get; set; }
    }
}
