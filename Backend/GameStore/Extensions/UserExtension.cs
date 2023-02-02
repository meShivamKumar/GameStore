using GameModels.Models;
using GameRepository.DataObjects;
using GameStore.Api.DTOs;

namespace GameStore.Api.Extensions
{
    public static class UserExtension
    {
        public static UserDTO AsDto(this UserModel user)
        {
            if (user == null)
            {
                return null;
            }
            return new UserDTO(user.UserEmail, user.UserName,user.Games.Select(g=>g.AsDto()).ToList());
        }

        public static UserModel ToModel(this UserDTO dto)
        {
            if (dto == null)
            {
                return null;
            }
            return new UserModel()
            {
                UserEmail= dto.UserEmail,
                UserName= dto.UserName,
                Games=dto.Games.Select(g=>g.ToModel()).ToList(),
            };
        }

        public static UserSimpleDTO AsDto(this SimpleUser user)
        {
            if (user == null)
            {
                return null;
            }
            return new UserSimpleDTO(user.UserEmail,user.UserName);
        }

        public static SimpleUser ToModel(this UserSimpleDTO dto)
        {
            if (dto == null)
            {
                return null;
            }
            return new SimpleUser()
            {
                UserEmail = dto.UserEmail,
                UserName = dto.UserName,
            };
        }

        public static UserNameUpdateDTO AsDto(this UserNameUpdate user)
        {
            if (user == null)
            {
                return null;
            }
            return new UserNameUpdateDTO(user.UserName);
        }

        public static UserNameUpdate ToModel(this UserNameUpdateDTO dto)
        {
            if (dto == null)
            {
                return null;
            }
            return new UserNameUpdate()
            {
                UserName = dto.UserName,
            };
        }

        public static UserResponseDTO AsDto(this UserResponse user)
        {
            if (user == null)
            {
                return null;
            }
            return new UserResponseDTO(user.users.Select(u=>u.AsDto()).ToList(),user.pageNumber,user.totalPages,user.totalElements);
        }

        public static UserResponse ToModel(this UserResponseDTO dto)
        {
            if (dto == null)
            {
                return null;
            }
            return new UserResponse()
            {
                users=dto.users.Select(u=>u.ToModel()).ToList(),
                pageNumber=dto.pageNumber,
                totalPages=dto.totalPages,
                totalElements=dto.totalElements
            };
        }
    }
}
