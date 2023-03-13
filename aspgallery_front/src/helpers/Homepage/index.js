import { useState } from "react"

export const loadFilesJsonState = (jsonArray = [], setState) => {
    if(jsonArray.length > 0){
        jsonArray.forEach((file) => {
            file.blobPicture = setHeaderBase64Json(file.typePicture, file.blobPicture);
        })
    }

    setState(jsonArray);
}

const setHeaderBase64Json = (typeFile, base64) => {
    switch (typeFile) {
        case '.png':
            return 'data:image/png;base64,' + base64;
        case '.jpeg':
            return 'data:image/jpeg;base64,' + base64;
        case '.jpg':
            return 'data:image/jpg;base64,' + base64;
        case '.jfif':
            return 'data:image/jfif;base64,' + base64;
        default:
            return base64;
    }
}