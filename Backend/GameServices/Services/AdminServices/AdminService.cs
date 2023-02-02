using GameRepository.DataObjects;
using GameModels.Models;
using System.Collections.Generic;
using System.Net;
using Game.Repository.Repository.AdminRepository;
using Microsoft.Extensions.Logging;

namespace GameServices.Services.adminServices
{
    public class AdminService : IAdminService
    {
        private readonly IAdminRepository AdminRepository;
        private readonly ILogger<AdminService> logger;
        public AdminService(IAdminRepository adminRepository,ILogger<AdminService> logger)
        {
            AdminRepository = adminRepository;
            this.logger = logger;
        }

        public AdminModel addAdmin(AdminModel admin)
        {
            logger.LogInformation("Adding Admin");
            return this.AdminRepository.add(admin);
        }

        public AdminModel changeAdminPassword(string email, AdminChangePass pass)
        {
            return this.AdminRepository.changePass(email, pass);
        }

        public AdminModel LoginAdmin(string email, string pass)
        {
            try
            {
                if(email== null || pass ==null) {
                    return null;
                }
              var admin=  this.AdminRepository.get(email);
                if(admin== null)
                {
                    return null;
                }
                if(admin.Pass == pass)
                {
                    return admin;
                }

                return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
               
        }

        public HttpStatusCode deleteAdmin(string email)
        {
            if (email =="shivam@123")
            {
                return HttpStatusCode.BadRequest;
            }
            return this.AdminRepository.delete(email);
        }

        public List<AdminList> getAllAdmins()
        {
            return this.AdminRepository.getAll();
        }
    }
}
