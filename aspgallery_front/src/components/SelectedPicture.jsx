import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setHeaderBase64Json, confirmDeletePicture, confirmUpdateNamePicture } from "../helpers/SelectedPicture";
import { PreviewFileDiv, InputNameFileDiv, ContainerNameFile  } from '../style/AddFile'
import { ContainerButtons, ContainerFileDiv } from '../style/SelectedPicture'

export default function SelectedPicture(){

    let { idFile } = useParams();
    const [file, setFile] = useState({});
    const [nameFileEdited, setNameFileEdited] = useState("");
    const [statusRequestFile, setStatusRequestFile] = useState(0);

    useEffect(()=>{
        async function fetchPictureAPI(){
            await axios.get('https://localhost:7054/API/AspGallery/Picture?idPicture='+ idFile)
                    .then((res)=>{
                        let {typePicture, blobPicture, namePicture} = res.data;
                        res.data.blobPicture = setHeaderBase64Json(typePicture, blobPicture);
                        setFile(res.data);
                        setNameFileEdited(namePicture);
                        setStatusRequestFile(200);
                    })
                    .catch((err)=>{
                        setStatusRequestFile(err.response.status);
                    })
        }

        fetchPictureAPI();
    },[idFile])

    
    return(
        <div key={file.idPicture}>
            {statusRequestFile !== 404 ? (
                <ContainerFileDiv >
                    <PreviewFileDiv>
                        <img src={file.blobPicture} alt={file.namePicture + file.typePicture} width="600" height="300" />
                    </PreviewFileDiv>

                    <ContainerNameFile>
                        <InputNameFileDiv>
                            <input type="text" 
                                name="NameFile"
                                className="selectedPicture" 
                                placeholder="nome do Arquivo" 
                                value={nameFileEdited}
                                onChange={(e) => {
                                    setNameFileEdited(e.target.value)
                                }}
                            />
                            <div className='extension-name'>{file.typePicture}</div>
                        </InputNameFileDiv>
                            <ContainerButtons>
                                <button onClick={() => confirmUpdateNamePicture(file.idPicture, nameFileEdited, file.namePicture)}>
                                    Editar nome do Arquivo
                                </button>  
                                <button className="deleteFile" onClick={() => confirmDeletePicture(file.idPicture)}>
                                    Excluir Arquivo
                                </button>  
                            </ContainerButtons>
                        </ContainerNameFile>     
                </ContainerFileDiv> 
            )
            : (
                <div style={{textAlign: 'center', marginTop: '5em'}}>
                    <h1>Arquivo não encontrado ou Falha no servidor</h1>
                    <i>Recarregue a página ou tente novamente mais tarde !</i>
                </div>
            )}
        </div>
    )
}