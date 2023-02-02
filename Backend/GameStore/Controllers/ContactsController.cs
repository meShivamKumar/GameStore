using GameServices.Services.contactServices;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using GameStore.Api.DTOs;
using GameStore.Api.Extensions;
namespace GameStore.Controllers
{
    [EnableCors("angular")]
    [Route("[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly IContactService contactService;
        public ContactsController(IContactService contactinterface)
        {

            this.contactService = contactinterface;
        }

        [HttpGet]
        public async Task<ActionResult<List<ContactDTO>>> Get()
        {
            try {
                var response = contactService.getAllQueries().Select(data => data.AsDto()).ToList();

                return response; }
            catch (Exception ex) {
                throw ex;
            }

        }

        [HttpGet("{Email}")]
        public async Task<ActionResult<ContactDTO>> getQuerybyEmail(string Email)
        {
            try { 
                if(Email== null)
                {
                    return BadRequest("Email is Required");
                }
                return (contactService.getQuerybyEmail(Email).AsDto()); }
            catch (Exception ex) {
                throw ex;
            }
           
        }


        [HttpPut("{Email}")]
        public async Task<ActionResult<ContactDTO>> replyUser(string Email, ContactReplyDTO reply)
        {
            try {

                if (Email == null)
                {
                    return BadRequest("Email is Required");
                }
                if (reply == null)
                {
                    return BadRequest("Reply Msg is Required");
                }

                var replyParam=reply.ToModel();
                return (contactService.replyQueries(Email, replyParam).AsDto()); }
            catch (Exception ex) {
                throw ex;
            }

           

        }


        [HttpPost]
        public async Task<ActionResult<AddContactDTO>> addQuery(AddContactDTO query)
        {
            try {
                if (query == null)
                {
                    return BadRequest("Enter Required Fields");
                }
                var queryParam=query.ToModel();
                return (contactService.addQuery(queryParam).AsDto()); }
            catch (Exception ex) {
                throw ex;
            }
           
           
        }



        [HttpDelete("{Email}")]
        public async Task<IActionResult> DeleteQuery(string Email)
        {
            try 
            {
                if (Email == null)
                {
                    return BadRequest("Email is Required");
                }
                contactService.deleteQuerybyEmail(Email);
                return NoContent(); }
            catch (Exception ex) {
                throw ex;
            }
            
        }

    }
}
