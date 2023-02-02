
using GameServices.Services.UserServices;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using GameStore.Api.DTOs;
using GameStore.Api.Extensions;
using System.Net;

namespace GameStore.Controllers
{
    [EnableCors("angular")]
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
       
        private readonly IUserService UserService;
        public UserController(IUserService UserService)
        {
          
            this.UserService= UserService;
        }

        [EnableCors("angular")]
        [HttpGet]
        public async Task<ActionResult<List<UserSimpleDTO>>> Get() {
            try { return (UserService.getAllUsers().Select(u=>u.AsDto()).ToList()); }
            catch (Exception ex) {
                throw ex;
            }
           
           
        }

        [HttpGet("{pageNumber}/{size}")]
        public async Task<ActionResult<UserResponseDTO>> GetResponse(int pageNumber, int size)
        {
            try {
                if (pageNumber == null)
                {
                    return BadRequest("Page Number Required");
                }
                if (size == null)
                {
                    return BadRequest("Size Required");
                }
                return UserService.getUsers(pageNumber, (float)size).AsDto(); }
            catch (Exception ex) { throw ex; }
            
        }

        [HttpGet("{Email}")]
        public async Task<ActionResult<UserDTO>> getUserByEmail(string Email)
        {
            try {
                if (Email == null)
                {
                    return BadRequest("Email Required");
                }
                return (UserService.getUserByEmail(Email).AsDto()); }
            catch (Exception ex) { throw ex; }
           
        }

        [HttpGet("Login/{Email}")]
        public async Task<ActionResult<UserSimpleDTO>> checkLogin(string Email)
        {
            try {
                if (Email == null)
                {
                    return BadRequest("Email Required");
                }
                return (UserService.checkUser(Email).AsDto()); }
            catch (Exception ex) { throw ex; }
           
        }

        [HttpPut("{Email}")]
        public async Task<ActionResult<UserNameUpdateDTO>> updateUserName(string Email,UserNameUpdateDTO user)
        {
            
            try {
                if (Email == null)
                {
                    return BadRequest("Email Required");
                }
                if(user == null)
                {
                    return BadRequest("Enter Required Fields");
                }
                return (UserService.updateUserNamebyEmail(Email, user.ToModel()).AsDto()); }
            catch (Exception ex) {
                throw ex;
            }
            
        


    }

        [HttpPut("{Email}/{gameId}")]
        public async Task<ActionResult<UserDTO>> updateUserGames(string Email, string gameId)
        {
            try
            {
                if (Email == null)
                {
                    return BadRequest("Email Required");
                }
                if (gameId == null)
                {
                    return BadRequest("gameId Required");
                }
                return (UserService.updateUserGamebyEmail(Email, gameId).AsDto());
            }
            catch(Exception ex)
            {
                throw ex;
            }
            
            


        }


        [HttpPost]
        public async Task<ActionResult<UserSimpleDTO>> createEmployee(UserSimpleDTO user)
        {
            try
            {
                return (UserService.addUser(user.ToModel()).AsDto());
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        
       
        [HttpDelete("{Email}")]
        public async Task<IActionResult> DeleteUser(string Email)
        {
            try
            {
                 UserService.deleteUser(Email);
                return Ok(Email);
            }
            catch(Exception ex)
            {
                throw ex;
               
            }
           
        }

    }
}
