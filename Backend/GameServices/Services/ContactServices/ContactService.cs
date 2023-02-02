using GameModels.Models;
using System.Net;
using Game.Repository.Repository.ContactRepository;


namespace GameServices.Services.contactServices
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository ContactRepository;

        public ContactService(IContactRepository contactRepository)
        {
            ContactRepository = contactRepository;
        }

        public AddContact addQuery(AddContact query)
        {
           return this.ContactRepository.add(query);
        }

        public HttpStatusCode deleteQuerybyEmail(string email)
        {
            return this.ContactRepository.delete(email);
        }

        public List<ContactModel> getAllQueries()
        {
            return this.ContactRepository.getAll();
        }

        public ContactModel getQuerybyEmail(string email)
        {
            return this.ContactRepository.get(email);
        }

        public ContactModel replyQueries(string email, ContactReply reply)
        {
            return this.ContactRepository.update(email,reply);
        }
    }
}
