using GameModels.Models;
using GameRepository.DataObjects;


namespace Game.Repository.Mapper
{
    public static class UserMapper
    {

        public static User ToEntity(this SimpleUser user)
        {
            var U = new User()
            {
                UserEmail = user.UserEmail,
                UserName = user.UserName
            };
            return U;
        }

        public static SimpleUser AsModel(this User user)
        {
            var U = new SimpleUser()
            {
                UserEmail = user.UserEmail,
                UserName = user.UserName
            };
            return U;
        }

        public static User ToEntity(this UserModel user)
        {
            var U = new User()
            {
                UserEmail = user.UserEmail,
                UserName = user.UserName,
                Games= user.Games.Select(g=>g.ToEntity()).ToList()
            };
            return U;
        }

        public static UserModel AsModelWithGame(this User user)
        {
            var U = new UserModel()
            {
                UserEmail = user.UserEmail,
                UserName = user.UserName,
                Games = user.Games.Select(g => g.AsModel()).ToList()
            };
            return U;
        }

    }
}
