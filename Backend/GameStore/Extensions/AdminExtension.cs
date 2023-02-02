using GameModels.Models;
using GameRepository.DataObjects;
using GameStore.Api.DTOs;

namespace GameStore.Api.Extensions
{
    public static class AdminExtension
    {
        public static AdminDTO AsDto(this AdminModel admin)
        {
            if (admin == null)
            {
                return null;
            }
            return new AdminDTO(admin.Email, admin.Pass);
        }

        public static AdminModel ToModel(this AdminDTO dto)
        {
            if (dto == null)
            {
                return null;
            }
            return new AdminModel()
            {
                Email= dto.Email,
                Pass= dto.Pass,
            };
        }

        public static AdminListDTO AsDto(this AdminList admin)
        {
            if (admin == null)
            {
                return null;
            }
            return new AdminListDTO(admin.Email);
        }

        public static AdminModel ToModel(this AdminListDTO dto)
        {
            return new AdminModel()
            {
                Email = dto.Email,
            
            };
        }

        public static AdminChangePassDTO AsDto(this AdminChangePass admin)
        {
            if (admin == null)
            {
                return null;
            }
            return new AdminChangePassDTO(admin.Pass);
        }

        public static AdminChangePass ToModel(this AdminChangePassDTO dto)
        {
            return new AdminChangePass()
            {
                Pass = dto.Pass,
            };
        }

    }
}
