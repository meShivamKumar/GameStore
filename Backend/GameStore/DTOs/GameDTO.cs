using GameModels.Models;
using System.ComponentModel.DataAnnotations;

namespace GameStore.Api.DTOs
{
    public record GameDTO( [Required] string GameId,
     string? GameName,
     string? GameDesc,
     int? Downloads,
     int? RatedAge,
     float? Price,
     string? GameImage,
     string? DownloadLink,
     bool? Topchart,
     bool? Recommended,
     bool? Popular ,
     int? Rating ,
     string? Category 
     );

    public record GameAddDTO([Required] string GameId,
    string? GameName,
    string? GameDesc,
    int? Downloads,
    int? RatedAge,
    float? Price,
    string? GameImage,
    string? DownloadLink,
    bool? Topchart,
    bool? Recommended,
    bool? Popular,
    int? Rating,
    string? Category
    );

    public record GameCategoriesDTO(
    List<string>? Category
    );
    public record GameImageUpdateDTO(
    string? GameImage
    );
    public record GameListDTO(
    [Required] string GameId,
    string? GameName,
    string? GameImage,
    bool? Topchart,
    bool? Recommended,
    bool? Popular,
    int? Rating,
    float? Price,
    string? Category
    );
    public record GameResponseDTO(List<GameListDTO> games ,
    int pageNumber,
    int totalPages,
    int totalElements 
    );
    public record GameUpdateDTO(
    string? GameName,
    string? GameDesc,
    int? Downloads,
    int? RatedAge,
    float? Price,
    string? GameImage,
    string? DownloadLink,
    bool? Topchart,
    bool? Recommended,
    bool? Popular,
    int? Rating,
    string? Category
    );
}
