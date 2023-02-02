using GameServices.Services.adminServices;
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
    public class AdminController : ControllerBase
    {
        private readonly IAdminService adminService;
        public AdminController(IAdminService admininterface)
        {

            this.adminService = admininterface;
        }

        [HttpGet]
        public async Task<ActionResult<List<AdminListDTO>>> Get()
        {
            try
            {
                return (adminService.getAllAdmins().Select(a=>a.AsDto()).ToList());
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet("{email}/{pass}")]
        public async Task<ActionResult<AdminDTO>> Get(string email,string pass)
        {
            try
            {
                if(email == null)
                {
                    return BadRequest("Email and password required");
                }
                return (adminService.LoginAdmin(email,pass).AsDto());
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }


        [HttpPost]
        public async Task<ActionResult<AdminDTO>> addAdmin(AdminDTO admin)
        {
            try { 
                if(admin==null)
                {
                    return BadRequest("Enter all required fields");
                }
                return (adminService.addAdmin(admin.ToModel()).AsDto()); 
            }
            catch(Exception ex) {
                throw ex;
            }
           

        }

        [HttpPut("{Email}")]
        public async Task<ActionResult<AdminDTO>> changePassword(string Email,AdminChangePassDTO pass)
        {
            try {
                if(Email== null)
                {
                    return BadRequest("Required Email");
                }
                if (pass == null)
                {
                    return BadRequest("Enter Required Fields");
                }
                return adminService.changeAdminPassword(Email, pass.ToModel()).AsDto();
            }
            catch (Exception ex) {
                throw ex;

            }
            
        }

        [HttpDelete("{Email}")]
        public async Task<IActionResult> DeleteAdmin(string Email)
        {
            try {
                if(Email== null)
                {
                    return BadRequest("Email Required");
                }
                adminService.deleteAdmin(Email);
                return NoContent();
            }
            catch (Exception ex) {
                throw ex;
            }
            
        }

    }
}