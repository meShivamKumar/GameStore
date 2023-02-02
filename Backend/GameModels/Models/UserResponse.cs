
namespace GameModels.Models
{
    public class UserResponse
    {
        public List<SimpleUser> users { get; set; } = new List<SimpleUser>();

        public int pageNumber { get; set; }

        public int totalPages { get; set; }
        public int totalElements { get; set; }
    }
}
