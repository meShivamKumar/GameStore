using GameServices.Services.GamesServices;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using GameStore.Api.DTOs;
using GameStore.Api.Extensions;
namespace GameStore.Controllers
{
    [EnableCors("angular")]
    [Route("[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly IGamesService gameService;
        public GameController(IGamesService GameService)
        {
            this.gameService = GameService;
        }

        [EnableCors("angular")]
        [HttpGet]
        public async Task<ActionResult<List<GameListDTO>>> Get()
        {
            try { return (gameService.getAllGames().Select(g=>g.AsDto()).ToList()); }
            catch (Exception ex) { throw ex; }
            
         
        }
        [EnableCors("angular")]
        [HttpGet("Categories")]
        public async Task<ActionResult<GameCategoriesDTO>> GetCategories()
        {
            try { return (gameService.getGameCategories().AsDto()); }
            catch (Exception ex) { throw ex; }
            
        }
        [EnableCors("angular")]
        [HttpGet("{pageNumber}/{size}")]
        public async Task<ActionResult<GameResponseDTO>> GetResponse(int pageNumber,int size, string? category, string? name,
            bool? free, bool? topChart, bool? recommended, bool? popular, int? rating)
        {
            try
            {
                if(pageNumber== null)
                {
                    return BadRequest("Page Number Required");
                }
                if (size == null)
                {
                    return BadRequest("Size is Required");
                }
                return gameService.getGames(pageNumber, (float)size, category, name,
            free, topChart, recommended, popular, rating).AsDto();
            }
            catch (Exception ex) { 
                throw ex; }
           
        }
        [EnableCors("angular")]
        [HttpGet("category/{category}")]
        public async Task<ActionResult<List<GameListDTO>>> GetByCategory(string category)
        {
            try {
                if (category == null)
                {
                    return BadRequest("Category is Required");
                }
                return gameService.getByCategory(category).Select(g=>g.AsDto()).ToList(); }
            catch (Exception ex) {
                throw ex;
            }
            
        }
        [EnableCors("angular")]
        [HttpGet("{gameId}")]
        public async Task<ActionResult<GameAddDTO>> GetGameDetails(string gameId)
        {
            try {
                if(gameId == null)
                {
                    return BadRequest("Game Id Required");
                }
                return (gameService.getGamebyId(gameId).AsDto()); }
            catch (Exception ex) {
                throw ex;
            }
           
          
        }
        [EnableCors("angular")]
        [HttpPost]
        public async Task<ActionResult<GameAddDTO>> publishGame(GameAddDTO game)
        {
            try {   
                if (game == null)
                {
                    return BadRequest("Enter Required Fields");
                }
                return (gameService.addGame(game.ToModel()).AsDto()); }
            catch (Exception ex) {
                throw ex;
            }
           
            
        }
        [EnableCors("angular")]
        [HttpPut("{gameId}")]
        public async Task<ActionResult<GameUpdateDTO>> UpdateGame(string gameId, GameUpdateDTO game)
        {
            try { 
                if (game == null)
                {
                    return BadRequest("Enter Required Fields");
                }
                if(gameId == null)
                {
                    return BadRequest("Game Id Required");
                }
                return (gameService.updateGamebyId(gameId, game.ToModel()).AsDto()); }
            catch (Exception ex) {
                throw ex;
            }
           

          
        }
        [EnableCors("angular")]
        [HttpPut("Image/{gameId}")]
        public async Task<IActionResult> setGameImage(string gameId, GameImageUpdateDTO game)
        {
            try {
                if (gameId == null)
                {
                    return BadRequest("Game Id Required");
                }
                if (game == null)
                {
                    return BadRequest("Enter Image String");
                }
                gameService.updateGameImagebyId(gameId, game.ToModel());
                return Ok(gameId);
            }
            catch (Exception ex) {
                throw ex;
            }
            
          
        }
        [EnableCors("angular")]
        [HttpDelete("{gameId}")]
        public async Task<IActionResult> DeleteGame(string gameId)
        {
            try {
                if (gameId == null)
                {
                    return BadRequest("Game Id Required");
                }
                gameService.deleteGamebyId(gameId);
                return NoContent();
            }
            catch (Exception ex) {
                throw ex;
            }
           
            
        }

    }
}
