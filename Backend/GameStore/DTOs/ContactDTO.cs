using System.ComponentModel.DataAnnotations;

namespace GameStore.Api.DTOs
{
    public record ContactDTO([Required] string UserEmail ,
     string? Title,
    string? Message,
     string? Reply );

    public record AddContactDTO([Required] string UserEmail,
     string? Title,
    string? Message);

    public record ContactReplyDTO(
    string? Reply);


}
