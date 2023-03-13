using System;
using System.Collections.Generic;

namespace AspGalleryAPI.Models;

public partial class Picture
{
    public int IdPicture { get; set; }

    public string NamePicture { get; set; }

    public string TypePicture { get; set; }

    public byte[] BlobPicture { get; set; }

    public DateTime InsertedDate { get; set; }

    public decimal SizePicture { get; set; }
}
