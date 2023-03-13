import React from 'react';
import addFileIcon from '../images/add-file.png'
import { CardFile, ContainerCardFile, HomepageDiv, AddFileDiv, LoadingTemplate } from '../style/Homepage'
import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { loadFilesJsonState } from '../helpers/Homepage';

export default function HomePage() {

    const history = useHistory();
    const redirectAddFilePage = (route) => history.push(route);
    const [Files, setFiles] = useState([]);
    const [showLoadingEffect, setShowLoadingEffect] = useState(true);

    useEffect(()=>{
        const loadAPI = async () => {
            await axios.get('https://localhost:7054/API/AspGallery/Pictures')
            .then(res => {
                loadFilesJsonState(res.data, setFiles);

            })
            .catch(err =>{
                swal({
                    icon: 'error',
                    title: 'Falha ao carregar seus Arquivos',
                    text: 'Recarregue a Página (F5) ou tente novamente mais Tarde'
                })
                console.log(err)
            })

            setShowLoadingEffect(false)
        }
        loadAPI()
    },[])

  return (
    <HomepageDiv>
     
     {!showLoadingEffect ? (
        <AddFileDiv onClick={() => redirectAddFilePage('addFile')}>
            <img src={addFileIcon} alt="Insert a New _Picture" width="35" height="35"/>
            <span>Adicionar Arquivo</span>
        </AddFileDiv> ) : (<></>)}

    {showLoadingEffect ? (
        <LoadingTemplate>
                <h2>Carregando os Arquivos...</h2>
        </LoadingTemplate>) : (<></>)}

        <ContainerCardFile>
            {!showLoadingEffect ? 
                Files.length > 0 ? Files.map((e) => {
                    return( 
                        <>
                            <Link to={'/File/' + e.idPicture}>
                                <CardFile key={e.idPicture}>
                                    <img src={e.blobPicture} alt={e.namePicture} width="200" height="180"/>
                                    <div id='info-file'>
                                    <span id='name-file'>{e.namePicture}</span>
                                        <span id='date-insert-file'>{e.insertedDate.split('T')[0]} - {e.insertedDate.split('T')[1]}</span>
                                    </div>            
                                </CardFile>
                            </Link>
                        </>
                    )
                }) : (<h2>Nenhum Arquivo Inserido !</h2>)
            : (<></>)}      
        </ContainerCardFile>
    </HomepageDiv>
  );
}