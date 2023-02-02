using System;
using System.Collections.Generic;

namespace GameRepository.DataObjects
{
    public partial class Contactuser
    {
        public string UserEmail { get; set; } = null!;
        public string? Title { get; set; }
        public string? Message { get; set; }
        public string? Reply { get; set; }
    }
}
