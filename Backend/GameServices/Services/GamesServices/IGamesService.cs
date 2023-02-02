using GameModels.Models;
using System.Net;

namespace GameServices.Services.GamesServices
{
    public interface IGamesService
    {
        List<GameList> getAllGames();

        GameResponse getGames(int pageNumber,float size ,string? category, string? name,
            bool? free, bool? topChart, bool? recommended, bool? popular, int? rating);
        GameAdd getGamebyId(string id);

        List<GameList> getByCategory(string category);
        GameCategories getGameCategories();
        GameAdd addGame(GameAdd newGame);

        GameUpdate updateGamebyId(string gameId, GameUpdate game);

        HttpStatusCode updateGameImagebyId(string gameId, GameImageUpdate game);

        HttpStatusCode deleteGamebyId(string id);


    }
}
