import swal from 'sweetalert'
import axios from 'axios'

export const validationForRequisitionSubmission = async (bodyReq) => {
  
    let regexSpecialChars = new RegExp(/[/:?*"<>|]/)

    if(bodyReq.NamePicture.length <= 0){
        swal({
            title: "Campo de nome do arquivo vazio",
            text: "Insira um nome para o arquivo selecionado",
            icon: "error"
        })
        return;
    }
    else if(regexSpecialChars.test(bodyReq.NamePicture)){
        swal({
            title: "Caracteres inválidos",
            text: `Os seguintes caracteres são invalidos para nome de arquivo: /:?*"<>|`,
            icon: "error"
        })
        return;
    }
    else{
        await saveFile(bodyReq)
    }
}

export const changeInputFile = (params) => {
    let nameFileInserted = params.tagFile.current.files[0].name;
    let extensionPicture = nameFileInserted.split('.').at(-1)

    var reader = new FileReader();
    reader.readAsDataURL(params.tagFile.current.files[0]);                  //Transforming file inserted in base64
    reader.onload = () => params.previewFile.current.src = reader.result
    
    params.previewFile.current.alt = params.tagFile.current.files[0].name;
    
    params.setNameFile(nameFileInserted.split('.')[0]);
    params.setExtensionFile("." + extensionPicture);
   
    params.setDisplayNameFileContainer({display: 'flex'})
    params.setContentButton("Alterar Imagem para Salvar")
}

//Secondary functions


const saveFile = async (body) => {
    console.log(body)
    await axios.post("https://localhost:7054/API/AspGallery/Picture", body)
    .then(res => {
        if(res.status === 200){
            swal({
                title: "Imagem salva com sucesso",
                text: "Consulte esta imagem na página inicial",
                icon: "success",
                buttons: false
              });
            setTimeout(() => window.location.href = "/" ,1500);
        }
        else{
            swal({
                title: "Falha ao salvar imagem",
                text: "Tente novamente mais tarde",
                icon: "error"
              })
        }
    })
    .catch(err => {
      swal({
        title: "Falha ao salvar arquivo",
        text: "Tente novamente mais tarde",
        icon: "error"
      })
      console.error(err)  
    })
}
