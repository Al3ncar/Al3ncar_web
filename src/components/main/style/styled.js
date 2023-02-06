import styled from "styled-components"
import Back from "../img/back.png"

export const Cont = styled.section`
    width: 98%; height: 100%;
    margin:0 1% 1% 1%;
    display: flex;
    justify-content: space-between;

    background-image: url(${Back});
    background-size: 100% 100vh;
    background-repeat: no-repeat;
    @media(max-width: 500px){
        height: 100vh;
        flex-direction: column;
        background-size: 100% 100vh;
    }
`
export const ContBox = styled.div`
    width: 50%; height: 100%;
    padding: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 500px){width: 100%;}
`
export const BoxSobre = styled.div`
    width:50%;
`
export const Sobre = styled.div`
    width:50%; 
    background-color: #f2f2f2;
    @media(max-width: 500px){
        height: 60%; width: 100%;
        align-items: center;
        flex-direction: column;
    }

`

export const SobreTilt = styled.h2`
    width: 50%;
    margin: 20% 0 0 10%;
    text-align: center;
    font-size: 3.9vw;
    font-weight: bolder;
    @media(max-width: 500px){
        font-size:8vw;
        width: 82%;
        margin: 4% 0 0 8%;
    }
`

export const SobreText = styled.div`
    width: 98%;
    font-size: 1.2vw;
    padding: 8% 0 6% 0;
    display: grid;
    place-items: center; 
    text-align: center;
    position: relative;
    &::before, &::after{
        content: "";
        background-color: black;
        position: absolute;
    }
    &::before{
        width:40%;
        padding:0.5%;
        top: 32%;
        left: 65%;
        transform: rotate(90deg);
    }
    &::after{
        width:40%;
        padding:0.5%;
        bottom:40%;
        right:65%;
        transform: rotate(90deg);
    }
    @media(max-width: 500px){
        width: 100%;
        padding:5% 0 2% 0;
    }
`

export const ElementRight = styled.span`
    padding: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom:9%;
    right:10%;
    transform: rotate(90deg);

        &::before, &::after{
            content:"";

            padding:15%;
            position:absolute;
            background-color:black;
            border-radius: 50%;
        }
        &::before{
            left:0%;
        }

`
export const Text = styled.p`
    width: 58%; height: 100%;
    font-size: 1.1vw;
    @media(max-width: 500px){
        width: 65%;
        font-size: 3.2vw;
    }

` 
export const ElementLeft = styled.span`
    padding: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:0%;
    left:10%;
    transform: rotate(90deg);

        &::before, &::after{
            content:"";

            padding:15%;
            position:absolute;
            background-color:black;
            border-radius: 50%;
        }
        &::before{
            left:0%;
        }

`


// S_Main

export const Conteiner = styled.section`
    width: 97%; height: 100%;
    background-image: url(${Back});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: left;
    margin: 0 1.5% 0 1.5%;
    padding:5%;
`
export const ContFils = styled.div`
    width: 95%;
    margin-left: 2.5%;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
`
export const BuscRepos = styled.div`
    width:95%;
    background-color: black;
    display: flex;
    justify-content: space-between;
    padding: 3% 0 2% 5%;
    margin-bottom: 2%;

`

export const TiltPort = styled.h2`
    font-size: 1.9vw;
    font-weight: bolder;
    color:white;
    @media(max-width: 500px){
        width: 100%;
        font-size:5vw ;
        text-align: center;
    }
`
export const Busc = styled.div`
    width:50%;
    border-radius:2vw;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5%;
    @media(max-width: 500px){
        display: none
    }   
`
export const BuscIcon = styled.div`
    width: 5%;
    :hover{
        cursor: pointer
    }
    
`
export const Put = styled.input`
    width: 90%;
    outline: none;
    border: none;
    padding: 2%;
    background-color: transparent;
`

export const Parg = styled.p`
    width: 95%;
    font-size: 2vw;
    padding: 5%;
    text-align: center;
    background-color: black;
    color: white;
    font-weight:bolder;
    
`

export const TitlRepos = styled.h3`
    width: 100%;
    background-color: black;
    padding:2% 0 2% 5%;
    text-align: left;
    color: white;
    @media(max-width: 500px){
        display: none;
    }
`