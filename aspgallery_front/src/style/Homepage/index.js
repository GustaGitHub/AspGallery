import { keyframes } from "styled-components"
import styled from 'styled-components'

export const HomepageDiv = styled.div`
    height: 100vh;
`
export const ContainerCardFile = styled.div`
    margin-top: 5vh;
    padding-bottom: 5em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    a{text-decoration: none; color: black;}

    @media (max-width: 800px){ margin-top: 20px; }
`
export const CardFile = styled.div`
    background: white;
    height: 350px;
    width: 270px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 1px 3.5px 0px rgba(0, 0, 0, 0.6 );
    cursor: pointer;

    div#info-file{
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        padding: 15px;
        
        span#name-file{
            text-align: center;
            font-weight: bolder;
            font-size: 14pt;
        }
        
        span#date-insert-file{ color: gray; }
    }

    img{ margin: 10px auto; }

    @media (max-width: 800px){ margin-top: 20px; }

    :hover{
        animation: 300ms ease-in-out hoverCard;
        box-shadow: 0px 15px 40px -15px rgba(0,0,0,0.75);
    }

    @keyframes hoverCard{
        from{box-shadow: 0px 1px 3.5px 0px rgba(0, 0, 0, 0.6 );}
        to{box-shadow: 0px 15px 40px -15px rgba(0,0,0,0.75);}
    }
`
export const AddFileDiv = styled.div`
    background-color: white;    
    margin: 20px 0 0 15px;
    height: 50px;
    width: 200px;
    border-radius: 8px;
    box-shadow: 0px 1px 3.5px 0px rgba(0, 0, 0, 0.6 );
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    :hover{
        cursor: pointer;
        opacity: 0.5;
    }
`
export const LoadingTemplate = styled.div`
    animation: 1s ease-in-out infinite loadingEffect;
    margin: 10em;
    text-align: center;

    @keyframes loadingEffect{
        0%{opacity: 1;}
        50%{opacity: 0;}
        100%{opacity: 1;}
    }
`

