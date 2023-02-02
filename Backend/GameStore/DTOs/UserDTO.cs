using GameModels.Models;
using System.ComponentModel.DataAnnotations;

namespace GameStore.Api.DTOs
{
    public record UserDTO([Required] string UserEmail,
        [Required] string UserName,ICollection<GameDTO> Games );


    public record UserSimpleDTO([Required] string UserEmail,
       [Required] string UserName);


    public record UserNameUpdateDTO(
       [Required] string UserName );

    public record UserResponseDTO( 
        List<UserSimpleDTO> users ,
        int pageNumber,
        int totalPages,
        int totalElements);
}
