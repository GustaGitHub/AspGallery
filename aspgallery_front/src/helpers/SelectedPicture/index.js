import axios from 'axios';
import swal from 'sweetalert'

export const setHeaderBase64Json = (typeFile, base64) => {
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

export const confirmDeletePicture = (idPicture) => {
    swal({
        title: "Tem certeza que deseja excluir este Arquivo ?",
        text: "Após a exlcusão não será possível mais recuperar este arquivo !",
        icon: "warning",
        buttons: true,
        dangerMode: true
    })
    .then( async (confirmedDelete)=> {
        if(confirmedDelete){
            await axios.delete('https://localhost:7054/API/AspGallery/Picture?idPicture=' + idPicture)
                .then(()=>{
                    swal({
                        title: "Arquivo excluído com sucesso",
                        text: "OBS:. O arquivo não poderá ser mais recuperado",
                        icon: "success",
                        buttons: false                
                    })
                });
        setTimeout(() => window.location.href = "/" ,1500);
        }
    })
}

export const confirmUpdateNamePicture = (idPicture, newNamePicture, oldNamePicture) => {
    swal({
        dangerMode: true,
        buttons: true,
        icon: 'warning',
        title: 'Você deseja atualizar o nome deste Arquivo ?',
        text: `
            - Nome Anterior: ${oldNamePicture}
            - Nome que será Aplicado: ${newNamePicture}
        `
    })
    .then(async (clickEvent)=>{
        if(clickEvent){
            await axios.put(`https://localhost:7054/API/AspGallery/Picture?newNamePicture=${newNamePicture}&idPicture=${idPicture}`)
            .then(()=>{
                swal({
                    title: "Nome do Arquivo Editado com sucesso",
                    icon: "success",
                    buttons: false                
                })
            });
            setTimeout(() => window.location.reload(), 1500);
        }
    })
}