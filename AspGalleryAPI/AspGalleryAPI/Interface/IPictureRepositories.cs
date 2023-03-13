using AspGalleryAPI.DTO;
using AspGalleryAPI.Models;

namespace AspGalleryAPI.Interface
{
    public interface IPictureRepositories
    {
        public Task<IList<Picture>> GetPictures();
        public Task<Picture> GetPicture(int id);
        public Task<bool> InsertPicture(PictureDTO pictureDTO);
        public Task<bool> UpdatePicture(string newNamePicture, int idPicture);
        public Task<bool> DeletePicture(int id);
    }
}
