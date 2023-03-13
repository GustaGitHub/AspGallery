using Microsoft.AspNetCore.Mvc;
using AspGalleryAPI.Interface;
using Microsoft.AspNetCore.Http.HttpResults;
using AspGalleryAPI.Models;
using AspGalleryAPI.DTO;

namespace AspGalleryAPI.Controllers
{
    [Route("API")]
    public class AspGalleryController : Controller
    {
        private readonly IPictureRepositories _pictureRepositories;

        public AspGalleryController(IPictureRepositories pictureRepositories)
        {
            _pictureRepositories = pictureRepositories;
        }

        [HttpGet]
        [Route("AspGallery/Pictures")]
        public async Task<IActionResult> GetAllPictures()
        {
            try
            {
                return Ok(await _pictureRepositories.GetPictures());
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        [Route("AspGallery/Picture")]
        public async Task<IActionResult> GetPicturesByID(int idPicture)
        {
            try
            {
                Picture findPicture = await _pictureRepositories.GetPicture(idPicture);

                if (findPicture != null)
                    return Ok(findPicture);
                else
                    return NotFound();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        [Route("AspGallery/Picture")]
        public async Task<IActionResult> InsertPicture([FromBody] PictureDTO picture)
        {
            try
            {
                bool insertedPicture = await _pictureRepositories.InsertPicture(picture);
                if (insertedPicture)
                    return Ok();
                else
                    return StatusCode(403);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        [Route("AspGallery/Picture")]
        public async Task<IActionResult> UpdateNamePicture(string newNamePicture, int idPicture)
        {
            try
            {
                bool updateNamePicture = await _pictureRepositories.UpdatePicture(newNamePicture, idPicture);
                if(updateNamePicture)
                    return Ok();
                else
                    return StatusCode(403);

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete]
        [Route("AspGallery/Picture")]
        public async Task<IActionResult> DeletePicture(int idPicture)
        {
            try
            {
                bool removedPicture = await _pictureRepositories.DeletePicture(idPicture);
                if(removedPicture)
                    return Ok();
                else
                    return StatusCode(403);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
