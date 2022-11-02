import styled from "styled-components"

export const Cont = styled.div`
    width:100%;
    margin: 1%;
`
export const CardImg = styled.div`
    width:100%;
    padding: 2%;
    position: relative;
`
export const Card = styled.div` 
    position: relative;
    background-color: black;
`
export const Titl = styled.h3`
    font-size: 1.9vw;
    font-weight: bolder;
    width: 100%; height: 100%;
    color:white;
    width: 100%;
    padding: 3% 0 1% 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    left: 0%;
    z-index: 2;
    background-image: linear-gradient(#00000000, #00000073, #000);
    transition: ease-in-out 0.5s;
    transform: translateX(45px);
    opacity: 0%;

    :hover{
        opacity: 100%;
        transform: translateX(0px);

    }
`