
using System.Net;

using GameModels.Models;

namespace Game.Repository.Repository.AdminRepository
{
    public interface IAdminRepository
    {
        List<AdminList> getAll();

        AdminModel get(string email);

        AdminModel add(AdminModel admin);

        AdminModel changePass(string email,AdminChangePass data);
        HttpStatusCode delete(string email);
    }
}
