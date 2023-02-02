using System;
using System.Collections.Generic;

namespace GameRepository.DataObjects
{
    public partial class User
    {
        public User()
        {
            Games = new HashSet<Game>();
        }

        public string UserEmail { get; set; } = null!;
        public string UserName { get; set; } = null!;

        public virtual ICollection<Game> Games { get; set; }
    }
}
