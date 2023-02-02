using System.ComponentModel.DataAnnotations;

namespace GameStore.Api.DTOs
{
    public record AdminDTO([Required]string Email,
  string? Pass);

    public record AdminListDTO([Required] string Email);

    public record AdminChangePassDTO(string? Pass);
}
