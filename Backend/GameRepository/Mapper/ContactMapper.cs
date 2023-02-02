
using GameRepository.DataObjects;
using GameModels.Models;


namespace Game.Repository.Mapper
{
    public static class ContactMapper
    {
        public static Contactuser ToEntity(this AddContact query)
        {
            var entity = new Contactuser()
            {
               
                UserEmail = query.UserEmail,
                Message = query.Message,
                Title = query.Title,
           
        };
            return entity;
        }
    }
}
