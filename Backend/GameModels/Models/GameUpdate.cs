namespace GameModels.Models
{
    public class GameUpdate
    {
        public string? GameName { get; set; }
        public string? GameDesc { get; set; }
        public int? Downloads { get; set; }
        public int? RatedAge { get; set; }
        public float? Price { get; set; }
        public string? GameImage { get; set; }
        public string? DownloadLink { get; set; }
        public bool? Topchart { get; set; }
        public bool? Recommended { get; set; }
        public bool? Popular { get; set; }
        public int? Rating { get; set; }
        public string? Category { get; set; }
    }
}
