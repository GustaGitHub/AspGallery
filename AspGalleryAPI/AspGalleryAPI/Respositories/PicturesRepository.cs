using AspGalleryAPI.DTO;
using AspGalleryAPI.Interface;
using AspGalleryAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AspGalleryAPI.Respositories
{
    public class PicturesRepository : IPictureRepositories
    {
        private readonly AppDbContext _appDbContext;

        public PicturesRepository(AppDbContext appDbContext) 
        {
            _appDbContext = appDbContext;
        }

        public async Task<Picture> GetPicture(int id)
        {
            var PictureForID = await _appDbContext.PicturesDB.FirstOrDefaultAsync(p => p.IdPicture == id);
            
            return PictureForID;
        }

        public async Task<IList<Picture>> GetPictures()
        {
            return await _appDbContext.PicturesDB.ToListAsync();
        }

        public async Task<bool> InsertPicture(PictureDTO pictureDTO)
        {
            try
            {
                Picture picture = new Picture()
                {
                    NamePicture = pictureDTO.NamePicture,
                    TypePicture = pictureDTO.TypePicture,
                    InsertedDate = DateTime.Now,
                    SizePicture = pictureDTO.SizePicture,
                    BlobPicture = convertBase64ToBytes(pictureDTO.Base64Picture)
                };

                await _appDbContext.PicturesDB.AddAsync(picture);
                await _appDbContext.SaveChangesAsync();

                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> DeletePicture(int id)
        {
            try
            {
                Picture pictureObject = await _appDbContext.PicturesDB.Where(x => x.IdPicture == id).FirstAsync();
                _appDbContext.PicturesDB.Remove(pictureObject);
                await _appDbContext.SaveChangesAsync();

                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> UpdatePicture(string newNamePicture, int idPicture)
        {
            try
            {
                Picture picture = await _appDbContext.PicturesDB.Where(x => x.IdPicture == idPicture).FirstAsync();
                picture.NamePicture = newNamePicture;
                _appDbContext.PicturesDB.Update(picture);
                
                await _appDbContext.SaveChangesAsync();

                return true;
            }
            catch
            {
                return false;
            }
        }

        #region Privates Methods

        private byte[] convertBase64ToBytes(string base64)
        {
            string base64WithoutHeader = base64.Split(",")[1];
            return Convert.FromBase64String(base64WithoutHeader);
        }

        #endregion
    }
}
