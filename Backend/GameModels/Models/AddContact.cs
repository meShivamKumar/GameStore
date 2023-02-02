namespace GameModels.Models
{
    public class AddContact
    {
        public string UserEmail { get; set; } = null!;
        public string? Title { get; set; }
        public string? Message { get; set; }
    }
}
