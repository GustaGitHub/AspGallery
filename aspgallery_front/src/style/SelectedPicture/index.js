import styled from "styled-components";

export const ContainerFileDiv = styled.div`
    margin-top: 5em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    @media (max-width: 1090px) { flex-direction: column; }
`
export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
     
    button{ 
        @media (max-width: 1090px) { width: 110%;  }
    }
    
`