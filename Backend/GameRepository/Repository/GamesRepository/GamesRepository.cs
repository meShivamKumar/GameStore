using Game.Repository.Mapper;
using GameModels.Models;
using GameRepository.DataObjects;
using System.Net;


namespace Game.Repository.Repository.GamesRepository
{
    public class GamesRepository : IGamesRepository
    {
        private readonly gamestoredbContext DBContext;

        public GamesRepository(gamestoredbContext DBContext)
        {
            this.DBContext = DBContext;
        }
        public GameAdd add(GameAdd game)
        {
            var entity = game.ToEntity();
           
            DBContext.Games.Add(entity);
            DBContext.SaveChangesAsync();
            return game;
        }

        public HttpStatusCode delete(string id)
        {
            var entity = new GameRepository.DataObjects.Game()
            {
                GameId = id
            };
            DBContext.Games.Attach(entity);
            DBContext.Games.Remove(entity);
            DBContext.SaveChangesAsync();
            return HttpStatusCode.OK;
        }

        public GameAdd get(string id)
        {
            var game = DBContext.Games.Select(s =>  s.AsAddModel()).ToList().FirstOrDefault(s => s.GameId == id);
            if (game == null)
            {
                return null;
            }
            else
            {
                return game;
            }
        }

        public List<GameList> getAll()
        {
            var List = DBContext.Games.Select(
                s => s.AsListModel()
            ).ToList();
            List = List.OrderBy(g => g.GameName).ToList();
            if (List.Count < 0)
            {
                return null;
            }
            else
            {
                return List;
            }
        }

        public List<GameList> getByCategory(string category)
        {
            var List = DBContext.Games.Select(
                s => s.AsListModel()
            ).ToList();
           
            List= List.Where(x => (x.Category.ToLower()).Contains( category.ToLower())).OrderBy(g => g.GameName)
              .ToList();

            if (List.Count < 0)
            {
                return null;
            }
            else
            {
                return List;
            }
        }

        public GameCategories getCategories()
        {
            var entity = DBContext.Games.Select(x => x.Category).Distinct().ToList();
            entity.Sort();
            var categories = new GameCategories()
            {
                Category = entity,
            };
            return categories;
        }

        public GameResponse getPages(int pageNumber, float size, string? category, string? name,
            bool? free, bool? topChart, bool? recommended, bool? popular, int? rating)
        {
            if (DBContext.Games == null)
            {
                return null;
            }

            var PageSize = size;
            var totalPages = Math.Ceiling(DBContext.Games.Count() / PageSize);
            var totalElements = DBContext.Games.Count();
            var data = DBContext.Games.Select(
                s => s.AsListModel()
            ).ToList();

            data=data.OrderBy(g => g.GameName).ToList();

            if (name != null)
            {
               data= data.Where(g => g.GameName.ToLower().Contains(name.ToLower())).ToList();
                totalPages = Math.Ceiling(data.Count() / PageSize);
               totalElements = data.Count();
            }
            if (free != null)
            {
                if (free==true)
                {
                    data = data.Where(g => g.Price<=0).ToList();
                }
                else
                {
                    data = data.Where(g => g.Price > 0).ToList();
                }
            }
            if (topChart != null)
            {
                data = data.Where(g => g.Topchart==topChart).ToList();
            }
            if(recommended != null)
            {
                data = data.Where(g => g.Recommended == recommended).ToList();
            }
            if (popular != null)
            {
                data = data.Where(g => g.Popular==popular).ToList();
            }
            if (rating != null)
            {
                data = data.Where(g => g.Rating== rating).ToList();
            }
            if(category != null)
            {
              data= data.Where(g => (g.Category.ToLower()).Contains(category.ToLower())).ToList();
                totalPages = Math.Ceiling(data.Count() / PageSize);
                totalElements = data.Count();
            }
          
            data= data.Skip((pageNumber - 1) * (int)PageSize).Take((int)PageSize).ToList(); 

            var response = new GameResponse()
            {
                games= data,
                totalElements= totalElements,
                totalPages= (int)totalPages,
                pageNumber=pageNumber,

            };

            return response;
        }

        public GameUpdate update(string gameId, GameUpdate game)
        {
            var entity = DBContext.Games.FirstOrDefault(s => s.GameId == gameId);

            entity.GameName = game.GameName;
            entity.GameDesc = game.GameDesc;
            entity.Downloads = game.Downloads;
            entity.RatedAge = game.RatedAge;
            entity.Price = game.Price;
            entity.GameImage = game.GameImage;
            entity.DownloadLink = game.DownloadLink;
            entity.Topchart = game.Topchart;
            entity.Recommended = game.Recommended;
            entity.Popular = game.Popular;
            entity.Rating = game.Rating;
            entity.Category = game.Category;

            DBContext.SaveChangesAsync();
            return game;
        }

        public HttpStatusCode updateImage(string gameId, GameImageUpdate game)
        {
            var entity = DBContext.Games.FirstOrDefault(s => s.GameId == gameId);
            entity.GameImage = game.GameImage;
            DBContext.SaveChangesAsync();
            return HttpStatusCode.OK;
        }
    }
}
