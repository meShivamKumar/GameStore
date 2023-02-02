
using GameModels.Models;
using System.Net;

namespace GameServices.Services.UserServices
{
    public interface IUserService
    {

        List<SimpleUser> getAllUsers();

        UserModel getUserByEmail(string email);

        UserResponse getUsers(int pageNumber, float size);
        UserNameUpdate updateUserNamebyEmail(string Email, UserNameUpdate user);

        UserModel? updateUserGamebyEmail(string Email, string gameId);

        SimpleUser addUser(SimpleUser user);

        SimpleUser checkUser(string Email);
        HttpStatusCode deleteUser(string email);
    }
}
