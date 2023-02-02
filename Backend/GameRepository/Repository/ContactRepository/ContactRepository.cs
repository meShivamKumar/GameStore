using GameModels.Models;
using GameRepository.DataObjects;
using Game.Repository.Mapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace Game.Repository.Repository.ContactRepository
{
    public class ContactRepository : IContactRepository
    {
        private readonly gamestoredbContext DBContext;

        public ContactRepository(gamestoredbContext gDBContext)
        {
            this.DBContext = gDBContext;
        }
        public AddContact add(AddContact query)
        {
            var entity = query.ToEntity();
            DBContext.Contactusers.Add(entity);
            DBContext.SaveChangesAsync();
            return query;
        }
            public HttpStatusCode delete(string email)
        {
            var entity = new Contactuser()
            {
                UserEmail = email
            };
            DBContext.Contactusers.Attach(entity);
            DBContext.Contactusers.Remove(entity);
            DBContext.SaveChangesAsync();
            return HttpStatusCode.OK;
        }

        public ContactModel get(string email)
        {
            Contactuser query = DBContext.Contactusers.FirstOrDefault(u => u.UserEmail == email);
            if (query == null)
            {
                return null;
            }

            ContactModel foundUser = new ContactModel()
            {
                UserEmail = query.UserEmail,
                Title = query.Title,
                Message = query.Message,
                Reply = query.Reply,
            };

            return foundUser;
        }

        public List<ContactModel> getAll()
        {
            var List = DBContext.Contactusers.Select(
             s => new ContactModel
             {
                 UserEmail = s.UserEmail,
                 Message = s.Message,
                 Title = s.Title,
                 Reply = s.Reply,
             }
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

        public ContactModel update(string email, ContactReply reply)
        {
            var entity = DBContext.Contactusers.FirstOrDefault(s => s.UserEmail == email);
            if (entity == null)
            {
                return null;
            }

            entity.Reply = reply.Reply;

            var data = new ContactModel()
            {
                UserEmail = entity.UserEmail,
                Title = entity.Title,
                Message = entity.Message,
                Reply = reply.Reply,
            };

            DBContext.SaveChangesAsync();
            return data;
        }
    }
}
