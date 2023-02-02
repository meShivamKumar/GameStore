
namespace GameModels.Models
{
    public class UserModel
    {
        public string UserEmail { get; set; } = null!;
        public string UserName { get; set; } = null!;
        public ICollection<GameModel> Games { get; set; } = new List<GameModel>();
    }

    
}
