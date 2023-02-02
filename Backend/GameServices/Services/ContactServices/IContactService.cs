using GameModels.Models;
using System.Net;

namespace GameServices.Services.contactServices
{
    public interface IContactService
    {
        List<ContactModel> getAllQueries();

        ContactModel getQuerybyEmail(string email);


        AddContact addQuery(AddContact query);

        ContactModel replyQueries(string email, ContactReply reply);

        HttpStatusCode deleteQuerybyEmail(string email);

    }
}
