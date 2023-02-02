using GameModels.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Game.Repository.Repository.ContactRepository
{
    public interface IContactRepository
    {
        List<ContactModel> getAll();

        ContactModel get(string email);


        AddContact add(AddContact newGame);

        ContactModel update(string email, ContactReply reply);

        HttpStatusCode delete(string email);

    }
}
