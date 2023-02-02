namespace GameModels.Models
{
    public class ContactModel
    {
        public string UserEmail { get; set; } = null!;
        public string? Title { get; set; }
        public string? Message { get; set; }
        public string? Reply { get; set; }
    }
}
