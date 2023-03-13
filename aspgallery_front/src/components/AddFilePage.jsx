import imgIconPreview from '../images/icon_preview.png'
import { AddFileDiv, PreviewFileDiv, InputNameFileDiv, ContainerNameFile, ContainerPreview } from '../style/AddFile/index'
import { validationForRequisitionSubmission, changeInputFile } from '../helpers/AddFilePage/index'
import { useState, useRef } from 'react';

export default function AddFilePage(){
    const tagFile = useRef(null);
    const previewFile = useRef(null);

    const [nameFile, setNameFile] =  useState("");
    const [extensionFile, setExtensionFile] = useState("Extensão");
    const [displayNameFileContainer, setDisplayNameFileContainer] = useState({display: 'none'});
    const [contentButton, setContentButton] = useState("Adicionar Imagem");

    let paramsFunctionChangeInputFile = {
        tagFile,
        previewFile,
        setNameFile,
        setExtensionFile,
        setDisplayNameFileContainer,
        setContentButton
    }
    
    const insertImageForSend = () => tagFile.current.click();
    
    const prepareBodyRequestSaveFile = () => {
        let body = {
            NamePicture : nameFile,
            TypePicture : extensionFile,
            SizePicture : (tagFile.current.files[0].size / 1024 / 1024 ),     // Converting Bytes in MegaBytes
            Base64Picture: previewFile.current.src
        }
        validationForRequisitionSubmission(body)
    }


    return(
        <AddFileDiv>
            <ContainerPreview>
                <PreviewFileDiv>
                    <img src={imgIconPreview} ref={previewFile} alt="teste" width="470" height="300" />
                </PreviewFileDiv>
                <button onClick={insertImageForSend}>
                    {contentButton}
                </button>
            </ContainerPreview>

            <ContainerNameFile style={displayNameFileContainer}>
                <InputNameFileDiv>
                        <input type="text" 
                            name="NameFile"
                            className='addFilePage' 
                            placeholder="nome do Arquivo" 
                            onChange={(e) => setNameFile(e.target.value)}
                            value={nameFile}
                        />
                    <div className='extension-name'>{extensionFile}</div>
                    
                </InputNameFileDiv>
                <button onClick={()=> prepareBodyRequestSaveFile()}>Confirmar</button>  
            </ContainerNameFile>

            <input type="file" id="fileInserted" ref={tagFile} name='File' accept=".jpg, .jpeg, .png, .jfif" 
                style={{display: "none"}}
                onChange={() => changeInputFile(paramsFunctionChangeInputFile)}
            />
        </AddFileDiv>
    );
}