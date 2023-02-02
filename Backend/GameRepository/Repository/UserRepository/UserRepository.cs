using Game.Repository.Mapper;
using GameModels.Models;
using GameRepository.DataObjects;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace Game.Repository.Repository.UserRepository
{
    public class UserRepository : IUserRepository
    {
        private readonly gamestoredbContext DBContext;

        public UserRepository(gamestoredbContext gDBContext)
        {
            this.DBContext = gDBContext;
        }
        public SimpleUser add(SimpleUser user)
        {
            var entity = user.ToEntity();
            DBContext.Users.Add(entity);
            DBContext.SaveChangesAsync();
            return user;
        }

        public HttpStatusCode delete(string email)
        {
            var entity = new User()
            {
                UserEmail = email
            };
            DBContext.Users.Attach(entity);
            DBContext.Users.Remove(entity);
            DBContext.SaveChangesAsync();
            return HttpStatusCode.OK;
        }

        public SimpleUser get(string Email)
        {
            User user = DBContext.Users.FirstOrDefault(u => u.UserEmail == Email);
            if (user == null)
            {
                return null;
            }

            var foundUser = user.AsModel();
            

            return foundUser;
        }

        public List<SimpleUser> getAll()
        {
            var List = DBContext.Users.Select(
              s => s.AsModel()
            
          ).ToList();

            if (List == null)
            {
                return null;
            }
            else
            {
                return List;
            }
        }

        public UserModel getDetail(string email)
        {
            User user = DBContext.Users.Include(u => u.Games).FirstOrDefault(u => u.UserEmail == email);
            if (user == null)
            {
                return null;
            }

            var foundUser = user.AsModelWithGame();

            return foundUser;
        }

        public UserResponse getPages(int pageNumber, float size)
        {
            if (DBContext.Users == null)
            {
                return null;
            }

            var PageSize = size;
            var totalPages = Math.Ceiling(DBContext.Users.Count() / PageSize);
            var totalElements = DBContext.Users.Count();
            var List = DBContext.Users.Select(
                s =>s.AsModel()
            ).Skip((pageNumber - 1) * (int)PageSize).Take((int)PageSize).ToList();

            var response = new UserResponse()
            {
                users = List,
                totalElements = totalElements,
                totalPages = (int)totalPages,
                pageNumber = pageNumber,

            };

            return response;
        }

        public UserModel? updateUserGame(string Email, string gameId)
        {
            var entity = DBContext.Users.FirstOrDefault(s => s.UserEmail == Email);
            if (entity == null)
            {
                return null;
            }
            var game = DBContext.Games.FirstOrDefault(s => s.GameId == gameId);
            if (game == null)
            {
                return null;
            }

            entity.Games.Add(game);
            var foundUser = entity.AsModelWithGame();
            DBContext.SaveChangesAsync();
            return foundUser;


        }

        public UserNameUpdate updateUserName(string Email, UserNameUpdate user)
        {
            var entity = DBContext.Users.FirstOrDefault(s => s.UserEmail == Email);

            entity.UserName = user.UserName;

            DBContext.SaveChangesAsync();

            return user;
        }
    }
}
