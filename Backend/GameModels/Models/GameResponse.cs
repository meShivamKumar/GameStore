using GameModels.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GameModels.Models
{
    public class GameResponse
    {
      public  List<GameList> games { get; set; } = new List<GameList>();

        public int pageNumber { get; set; }

        public int totalPages { get; set; }
        public int totalElements { get; set; }

    }
}
