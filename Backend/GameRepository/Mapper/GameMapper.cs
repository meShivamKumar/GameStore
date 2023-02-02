using GameModels.Models;


namespace Game.Repository.Mapper
{
    public static class GameMapper
    {
        public static GameModel AsModel(this GameRepository.DataObjects.Game game)
        {
            var model = new GameModel()
            {
                GameId = game.GameId,
                GameName = game.GameName,
                GameDesc = game.GameDesc,
                GameImage = game.GameImage,
                Category = game.Category,
                DownloadLink = game.DownloadLink,
                Downloads = game.Downloads,
                Popular = game.Popular,
                Price = game.Price,
                RatedAge = game.RatedAge,
                Rating = game.Rating,
                Recommended = game.Recommended,
                Topchart = game.Topchart,
            };

            return model;

        }

        public static GameRepository.DataObjects.Game  ToEntity(this GameModel game)
        {
            var model = new GameRepository.DataObjects.Game()
            {
                GameId = game.GameId,
                GameName = game.GameName,
                GameDesc = game.GameDesc,
                GameImage = game.GameImage,
                Category = game.Category,
                DownloadLink = game.DownloadLink,
                Downloads = game.Downloads,
                Popular = game.Popular,
                Price = game.Price,
                RatedAge = game.RatedAge,
                Rating = game.Rating,
                Recommended = game.Recommended,
                Topchart = game.Topchart,
            };

            return model;

        }


        public static GameRepository.DataObjects.Game ToEntity(this GameAdd game)
        {
            var model = new GameRepository.DataObjects.Game()
            {
                GameId = game.GameId,
                GameName = game.GameName,
                GameDesc = game.GameDesc,
                GameImage = game.GameImage,
                Category = game.Category,
                DownloadLink = game.DownloadLink,
                Downloads = game.Downloads,
                Popular = game.Popular,
                Price = game.Price,
                RatedAge = game.RatedAge,
                Rating = game.Rating,
                Recommended = game.Recommended,
                Topchart = game.Topchart,
            };

            return model;

        }

        public static GameAdd AsAddModel(this GameRepository.DataObjects.Game game)
        {
            var model = new GameAdd()
            {
                GameId = game.GameId,
                GameName = game.GameName,
                GameDesc = game.GameDesc,
                GameImage = game.GameImage,
                Category = game.Category,
                DownloadLink = game.DownloadLink,
                Downloads = game.Downloads,
                Popular = game.Popular,
                Price = game.Price,
                RatedAge = game.RatedAge,
                Rating = game.Rating,
                Recommended = game.Recommended,
                Topchart = game.Topchart,
            };

            return model;

        }

        public static GameList AsListModel(this GameRepository.DataObjects.Game game)
        {
            var model = new GameList()
            {
                GameId = game.GameId,
                GameName = game.GameName,
                GameImage = game.GameImage,
                Category = game.Category,
                Popular = game.Popular,
                Price = game.Price,
                Rating = game.Rating,
                Recommended = game.Recommended,
                Topchart = game.Topchart,
            };

            return model;

        }


    }
}
