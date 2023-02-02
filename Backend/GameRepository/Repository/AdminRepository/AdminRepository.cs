using GameModels.Models;
using GameRepository.DataObjects;
using Microsoft.Extensions.Logging;
using System.Net;

namespace Game.Repository.Repository.AdminRepository
{
    public class AdminRepository:IAdminRepository
    {
        private readonly gamestoredbContext DBContext;
        private readonly ILogger<Admin> logger;
        public AdminRepository(gamestoredbContext gDBContext,ILogger<Admin> _logger)
        {
            this.DBContext = gDBContext;
            logger= _logger;
        }

        public AdminModel add(AdminModel admin)
        { logger.LogInformation("Adding Admin");
            var entity = new Admin()
            {
                Email = admin.Email,
                Pass = admin.Pass,

            };
            DBContext.Admins.Add(entity);
            logger.LogInformation("Admin Added");
            DBContext.SaveChangesAsync();
            return admin;
        }

        public HttpStatusCode delete(string email)
        {
            logger.LogInformation("Deleting Admin");
            var entity = new Admin()
            {
                Email = email
            };
            DBContext.Admins.Attach(entity);
            DBContext.Admins.Remove(entity);
            logger.LogInformation("Admin Deleted");
            DBContext.SaveChangesAsync();
            return HttpStatusCode.OK;
        }

        public AdminModel get(string email)
        {
            logger.LogInformation("Getting Admin");
            Admin admin = DBContext.Admins.FirstOrDefault(u => (u.Email == email));
            if (admin == null)
            {
                logger.LogWarning("Admin Not Found");
                return null;
               
            }

            logger.LogInformation("Admin Found");
            AdminModel foundAdmin = new AdminModel()
            {
                Email = admin.Email,
                Pass = admin.Pass
            };

            return foundAdmin;
        }

        public List<AdminList> getAll()
        {
            logger.LogInformation("Getting All Admins");
            var List = DBContext.Admins.Select(
              s => new AdminList
              {
                  Email = s.Email,

              }
          ).ToList();

            if (List == null)
            {
                return null;
                logger.LogError("Admin List is empty");
            }
            else
            {
                return List;
            }
        }

        public AdminModel changePass(string email,AdminChangePass pass)
        {
            logger.LogInformation("Changing Password");
            var data = DBContext.Admins.FirstOrDefault(a => a.Email == email);
            data.Pass = pass.Pass;
            logger.LogInformation("Password Changed");
            DBContext.SaveChangesAsync();

            AdminModel admin = new AdminModel()
            {
                Email = email,
                Pass = pass.Pass
            };
            return admin;
        }
    }
}
