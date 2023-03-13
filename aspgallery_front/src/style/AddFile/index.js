import styled from "styled-components";

export const AddFileDiv = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 625px){
        flex-direction: column;
    }
`

export const PreviewFileDiv  = styled.div`
    background: white;
    height: 330px;
    width: 625px;
    border-radius: 8px;
    box-shadow: 0px 1px 3.5px 0px rgba(0, 0, 0, 0.6 );
    text-align: center;
    padding-top: 15px;

    img{
        @media (max-width: 625px) {
            width: 310px;
            height: 160px;
            border: none;
        }
    }

    @media (max-width: 625px) {
        height: 210px;
        width: 310px;
        margin: 0 auto;
    }
`

export const InputNameFileDiv = styled.div`
    display: flex;
    flex-direction: row;

    input[type="text"]{
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        height: 40px;
        width: 350px;
        font-size: 13pt;
        padding-left: 10px;
        border: none;
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.6 );
    }

    input.selectedPicture{
        @media (max-width: 625px) {
           margin-left: 10%;
           width: 100%;
        }
    }

    div.extension-name{
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        background-color: grey;
        color: white;
        width: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.6 );
    }

    @media (max-width: 625px) {
        width: 100%;
        font-size: 15pt;
        margin-bottom: 25px;
    }
`

export const ContainerPreview = styled.div`

    button{
        width: 625px;
        height: 50px;
        margin-top: 10px;
        background-color: #03c04a;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 20px;
        box-shadow: 0px 1.5px 5px 0px rgba(0, 0, 0, 0.6 );

        :hover{opacity: 0.5;}

        @media (max-width: 625px) {
            width: 100%;
            font-size: 15pt;
        }
    } 
`

export const ContainerNameFile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media (max-width: 625px) {
        width: 90%;
        margin-top: 10%;
    }

    button{
        height: 40px;
        margin-top: 10px;
        background-color: #03c04a;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 20px;
        box-shadow: 0px 1.5px 5px 0px rgba(0, 0, 0, 0.6 );

        :hover{opacity: 0.5;}
    } 

    button:disabled{
        opacity: 0.5;
    }
    
    .deleteFile{
        background-color: red;
    }
`

