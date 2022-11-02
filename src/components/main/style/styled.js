import styled from "styled-components"
import Back from "../img/back.png"

export const Cont = styled.section`
    width: 97%;
    margin:0 1.5% 1.5% 1.5%;
    background-image: url(${Back});
    background-size: 100% ;
    background-repeat: no-repeat;
    background-position: left;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`
export const ContBox = styled.div`
    width: 35%;
    padding: 10%;
    opacity: 0%;
    transform: translateY(100px);
    transition: ease-in-out 0.5s;
    &:hover{
        opacity: 100%;
        transform: translateX(0);
        transform: scale(1.1);
    }
`
export const BoxSobre = styled.div`
    width:50%;
`
export const Sobre = styled.div`
    width:90%; 
    background-color: whitesmoke;


`

export const SobreTilt = styled.h2`
    width: 95%;
    margin: 15% 0 0 8%;
    text-align: center;
    font-size: 3.9vw;
    font-weight: bolder;
`

export const SobreText = styled.div`
    width: 100%;
    font-size: 1.2vw;
    padding: 10% 0 8% 0;
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
`
export const Busc = styled.div`
    width:50%;
    border-radius:2vw;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5%;

`
export const BuscIcon = styled.div`
    width: 5%;
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
`