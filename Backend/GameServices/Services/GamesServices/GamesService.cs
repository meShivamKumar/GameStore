using GameRepository.DataObjects;
using GameModels.Models;
using Microsoft.EntityFrameworkCore;
using System.Net;
using Game.Repository.Repository.GamesRepository;


namespace GameServices.Services.GamesServices
{
    public class GamesService : IGamesService
    {

        private readonly IGamesRepository GamesRepository;
        public GamesService(IGamesRepository GamesRepository)
        {

            this.GamesRepository = GamesRepository;
        }
        public GameAdd addGame(GameAdd game)
        {
           return GamesRepository.add(game);
        }

        public HttpStatusCode deleteGamebyId(string id)
        {
            return GamesRepository.delete(id);

        }

        public List<GameList> getAllGames()
        {
            return GamesRepository.getAll();
        }

        public List<GameList> getByCategory(string category)
        {
            return GamesRepository.getByCategory(category);
        }

        public GameAdd getGamebyId(string id)
        {
            return GamesRepository.get(id);
        }

        public GameCategories getGameCategories()
        {
            return GamesRepository.getCategories();
        }

        public GameResponse getGames(int pageNumber, float size, string? category, string? name,
            bool?free,bool? topChart,bool? recommended,bool?popular,int? rating)
        {
            return GamesRepository.getPages(pageNumber, size,category,name,free,topChart,recommended,
                popular,rating);
        }

        public GameUpdate updateGamebyId(string gameId, GameUpdate game)
        {
            return GamesRepository.update(gameId,game);
        }

        public HttpStatusCode updateGameImagebyId(string gameId, GameImageUpdate game)
        {
            return GamesRepository.updateImage(gameId, game); ;
        }
    }
}
