using GameModels.Models;
using Microsoft.EntityFrameworkCore;
using System.Net;
using GameRepository.DataObjects;
using Game.Repository.Repository.UserRepository;



namespace GameServices.Services.UserServices
{
    public class UserService : IUserService
    {
        private readonly IUserRepository UserRepository;
        public UserService(IUserRepository UserRepository)
        {

            this.UserRepository = UserRepository;
        }
        public SimpleUser addUser(SimpleUser user)
        {
            return UserRepository.add(user);
        }

        public SimpleUser checkUser(string Email)
        {
            return UserRepository.get(Email);
        }

        public HttpStatusCode deleteUser(string email)
        {
            return UserRepository.delete(email);
        }

        public List<SimpleUser> getAllUsers()
        {
            return UserRepository.getAll();
        }

        public UserModel getUserByEmail(string email)
        {
            return UserRepository.getDetail(email);

        }

        public UserResponse getUsers(int pageNumber, float size)
        {
           return this.UserRepository.getPages(pageNumber, size);
        }

        public UserModel? updateUserGamebyEmail(string Email, string gameId)
        {
            return UserRepository.updateUserGame(Email, gameId);
        }

        public UserNameUpdate updateUserNamebyEmail(string Email, UserNameUpdate user)
        {
            return UserRepository.updateUserName(Email, user);


        }

      
    }
}
