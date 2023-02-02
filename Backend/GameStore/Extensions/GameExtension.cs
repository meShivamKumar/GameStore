using GameModels.Models;
using GameRepository.DataObjects;
using GameStore.Api.DTOs;

namespace GameStore.Api.Extensions
{
    public static class GameExtension
    {
        public static GameDTO AsDto(this GameModel model)
        {
            return new GameDTO(model.GameId, model.GameName, model.GameDesc, model.Downloads,model.RatedAge,model.Price,
                model.GameImage,model.DownloadLink,model.Topchart,model.Recommended,model.Popular,model.Rating,model.Category);
        }

        public static GameModel ToModel(this GameDTO game)
        {
            if (game == null)
            {
                return null;
            }
            return new GameModel()
            {
                GameId = game.GameId,
                GameName = game.GameName,
                GameDesc = game.GameDesc,
                Downloads = game.Downloads,
                RatedAge = game.RatedAge,
                Price = game.Price,
                GameImage = game.GameImage,
                DownloadLink = game.DownloadLink,
                Topchart = game.Topchart,
                Recommended = game.Recommended,
                Popular = game.Popular,
                Rating = game.Rating,
                Category = game.Category,
            };
        }


        public static GameAddDTO AsDto(this GameAdd model)
        {
            if (model == null)
            {
                return null;
            }
            return new GameAddDTO(model.GameId, model.GameName, model.GameDesc, model.Downloads, model.RatedAge, model.Price,
                model.GameImage, model.DownloadLink, model.Topchart, model.Recommended, model.Popular, model.Rating, model.Category);
        }

        public static GameAdd ToModel(this GameAddDTO game)
        {
            if (game == null)
            {
                return null;
            }
            return new GameAdd()
            {
                GameId = game.GameId,
                GameName = game.GameName,
                GameDesc = game.GameDesc,
                Downloads = game.Downloads,
                RatedAge = game.RatedAge,
                Price = game.Price,
                GameImage = game.GameImage,
                DownloadLink = game.DownloadLink,
                Topchart = game.Topchart,
                Recommended = game.Recommended,
                Popular = game.Popular,
                Rating = game.Rating,
                Category = game.Category,
            };
        }

        public static GameCategoriesDTO AsDto(this GameCategories model)
        {
            if (model == null)
            {
                return null;
            }
            return new GameCategoriesDTO(model.Category);
        }

        public static GameCategories ToModel(this GameCategoriesDTO game)
        {
            if (game == null)
            {
                return null;
            }
            return new GameCategories()
            {
                Category = game.Category,
            };
        }

        public static GameImageUpdateDTO AsDto(this GameImageUpdate model)
        {
            if (model == null)
            {
                return null;
            }
            return new GameImageUpdateDTO(model.GameImage);
        }

        public static GameImageUpdate ToModel(this GameImageUpdateDTO game)
        {
            return new GameImageUpdate()
            {
                GameImage = game.GameImage,
            };
        }
        public static GameListDTO AsDto(this GameList model)
        {
            if (model == null)
            {
                return null;
            }
            return new GameListDTO(model.GameId, model.GameName,
                model.GameImage,model.Topchart, model.Recommended, model.Popular, model.Rating, model.Price, model.Category);
        }

        public static GameList ToModel(this GameListDTO game)
        {
            return new GameList()
            {
                GameId = game.GameId,
                GameName = game.GameName,
                Price = game.Price,
                GameImage = game.GameImage,
                Topchart = game.Topchart,
                Recommended = game.Recommended,
                Popular = game.Popular,
                Rating = game.Rating,
                Category = game.Category,
            };
        }
        public static GameResponseDTO AsDto(this GameResponse model)
        {
            if (model == null)
            {
                return null;
            }
            return new GameResponseDTO(model.games.Select(g => g.AsDto()).ToList(),model.pageNumber, model.totalPages,model.totalElements);
        }

        public static GameResponse ToModel(this GameResponseDTO game)
        {
            return new GameResponse()
            {
                games = game.games.Select(g => g.ToModel()).ToList(),
                totalElements= game.totalElements,
                totalPages = game.totalPages,
                pageNumber= game.pageNumber,
            };
        }

        public static GameUpdateDTO AsDto(this GameUpdate model)
        {
            if (model == null)
            {
                return null;
            }
            return new GameUpdateDTO(model.GameName, model.GameDesc, model.Downloads, model.RatedAge, model.Price,
                model.GameImage, model.DownloadLink, model.Topchart, model.Recommended, model.Popular, model.Rating, model.Category);
        }

        public static GameUpdate ToModel(this GameUpdateDTO game)
        {
            return new GameUpdate()
            {
                GameName = game.GameName,
                GameDesc = game.GameDesc,
                Downloads = game.Downloads,
                RatedAge = game.RatedAge,
                Price = game.Price,
                GameImage = game.GameImage,
                DownloadLink = game.DownloadLink,
                Topchart = game.Topchart,
                Recommended = game.Recommended,
                Popular = game.Popular,
                Rating = game.Rating,
                Category = game.Category,
            };
        }
    }
}
