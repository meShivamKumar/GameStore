using GameModels.Models;
using GameStore.Api.DTOs;

namespace GameStore.Api.Extensions
{
    public static class ContactExtension
    {
        public static ContactDTO AsDto(this ContactModel model)
        {
            if(model == null)
            {
                return null;
            }
            return new ContactDTO(model.UserEmail, model.Title, model.Message, model.Reply);
        }

        public static ContactModel ToModel(this ContactDTO dto)
        {
            return new ContactModel() {
                UserEmail= dto.UserEmail,
                Title= dto.Title,
                Message= dto.Message,
                Reply=dto.Reply 
            };
        }

        public static AddContactDTO AsDto(this AddContact model)
        {
            if (model == null)
            {
                return null;
            }
            return new AddContactDTO(model.UserEmail, model.Title, model.Message);
        }

        public static AddContact ToModel(this AddContactDTO dto)
        {
            return new AddContact()
            {
                UserEmail = dto.UserEmail,
                Title = dto.Title,
                Message = dto.Message,
            };
        }


        public static ContactReplyDTO AsDto(this ContactReply model)
        {
            if (model == null)
            {
                return null;
            }
            return new ContactReplyDTO(model.Reply);
        }

        public static ContactReply ToModel(this ContactReplyDTO dto)
        {
            return new ContactReply()
            {
                Reply= dto.Reply,
            };
        }

    }
}
