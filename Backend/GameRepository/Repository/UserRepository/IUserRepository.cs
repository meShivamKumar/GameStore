using GameModels.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Game.Repository.Repository.UserRepository
{
   public interface IUserRepository
    {
        List<SimpleUser> getAll();

        UserResponse getPages(int pageNumber, float size);
        UserModel getDetail(string email);

        UserNameUpdate updateUserName(string Email, UserNameUpdate user);

        UserModel? updateUserGame(string Email, string gameId);

        SimpleUser add(SimpleUser user);

        SimpleUser get(string Email);
        HttpStatusCode delete(string email);
    }
}
