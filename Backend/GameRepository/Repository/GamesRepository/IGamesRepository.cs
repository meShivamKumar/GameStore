using GameModels.Models;
using System.Net;


namespace Game.Repository.Repository.GamesRepository
{
    public interface IGamesRepository
    {
        List<GameList> getAll();
        GameResponse getPages(int pageNumber, float size, string? category, string? name,
            bool? free, bool? topChart, bool? recommended, bool? popular, int? rating);
        GameAdd get(string id);

        GameCategories getCategories();

        List<GameList> getByCategory(string category);
        GameAdd add(GameAdd newGame);

        GameUpdate update(string gameId, GameUpdate game);

        HttpStatusCode updateImage(string gameId, GameImageUpdate game);

        HttpStatusCode delete(string id);
    }
}
