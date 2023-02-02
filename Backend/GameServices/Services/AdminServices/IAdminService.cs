using GameModels.Models;
using System.Net;

namespace GameServices.Services.adminServices
{
    public interface IAdminService
    {
        List<AdminList> getAllAdmins();

        AdminModel LoginAdmin(string email,string pass);

        AdminModel addAdmin(AdminModel admin);
        AdminModel changeAdminPassword(string email,AdminChangePass pass);

        HttpStatusCode deleteAdmin(string email);

    }
}
