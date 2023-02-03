import styled from "styled-components"
import Back from "../imgs/back.png"
import {Link} from "react-scroll" 

export const Header = styled.header`
    width: 100%; height: 100%;
`
export const BackImg = styled.section`
    width: 98%; 
    margin: 1%;   
    background-image: url(${Back});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    
    position: relative;
    ::after{
        content: "";
        width:22%; height:48%;
        background-color: black;
        padding: 2% 0 35% 0;
        position: absolute;
        right: 1.5%;
        top: 60%;
    }
    @media(max-width: 500px){
        height: 100vh;
        &::after{
            display: none;
        }
    } 

`
export const BoxMoji = styled.div`
    width: 23%;
    background-color: black;
    position: absolute;
    top:0;  left: 1.5%;
    padding: 13% 5% 4% 5%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    @media(max-width: 500px){
        display: none;
    }
`
export const Moji = styled.img`
    width: 100%;
    transition: ease-in-out 0.3s;
    position: relative;
    bottom: 0;
    z-index: 1;
    opacity: 0;
    &:hover{
        opacity: 100%;
        transform: scale(1.1);
    }
`
export const List = styled.ul`
    width: 100%;
    border-radius: 0.3vw;
    padding: 0 0 1% 0;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    position: relative;
    &::after{
        content:"";
        width: 80%;
        background-color: black;
        padding:0.1%;
        position: absolute;
        top:100%; left: 10%;
    }
    @media(max-width:500px){
        &::after{
            padding: 0.6%;
            background-image: linear-gradient(to right, #000000, #202020, #3b3b3b, #585858, #767676);
            border-radius: 2vw;
        }
    } 
`
export const Anc = styled.a`
    width: 100%;
    text-decoration: none;
    text-align: center;
    color:black;
    @media(max-width: 800px){
        display: none;
    } 
`
export const ItemLi = styled(Link)`
    width: 100%;
    text-align: center;
    font-size: 1.4vw;
    font-weight:bolder;
    color: black;
    text-decoration: none;
    :hover{
        transform: scale(1.1);
        cursor:pointer;
        color:black;
    }


`
export const FItemLi = styled(Link)`
    width: 100%;
    text-align: center;
    font-size: 1.3vw;
    font-weight: bolder;
    color:white;
    text-decoration: none;
    z-index: 2;
    :hover{
        transform: scale(1.1);
        cursor:pointer;
        color: white;
    }
`
export const BoxLog = styled.div`
    width: 40%;
    transition: ease-in-out 0.2s ;
    display: flex; 
    justify-content: center;
    :hover{
        transform: scale(1.1);
    }
`
export const BoxText = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 500px){
        width: 100%;
        align-items: center;
        flex-direction: column-reverse;
    } 
`
export const BoxTilt = styled.div`
    width:100%;
    padding:25% 0 3% 0;
    font-weight: bolder;
    position:relative;
    left: 0;
    &::after{
        content:"";
        width:85%;
        padding:0.3%;
        position: absolute;
        bottom:0; left:0;
        background-color:black;
    }
    @media(max-width: 500px){
        width: 100%;
        position: relative;
        padding: 0%;
        
        &::after{
            width: 100%;
            border-radius: 2vw;
            background-image: linear-gradient(to left, #000000, #202020, #3b3b3b, #585858, #767676);
            padding: 1%;
        }
    } 
`
export const Titl = styled.h1` 
    width:85%;
    font-size:6.5vw;
    font-weight: bolder;
    color:black;
    text-align: right;
    @media(max-width: 500px){
        width: 100%;
        padding: 5%;
        text-align: center;
        font-size: 8vw;
    } 
`
export const BoxOla = styled.div`
    width: 85%;
    padding: 2% 0 1% 0;
    text-align: right;
    display: flex;
    justify-content: end;
    @media(max-width: 500px){
        width: 100%;
        text-align: center;
    } 
`
export const Ola = styled.p`
    width: 78%;
    font-size: 1.2vw;
    @media(max-width: 500px){ 
        width: 100%;
        font-size: 3vw;
    }
`
export const Bold = styled.span`
    font-weight: bold;
`
export const BoxImg = styled.div`
    width: 35%; height: 100%;
    z-index: 2;
    margin-top:5%;
    display:flex;
    justify-content: end;
    align-items: flex-end;
    position: relative;
    @media(max-width: 500px){
        width: 70%;
    } 
`     

export const Img = styled.img`
    width: 100%;
    border-radius:50%;
    position: absolute;
    top:60%; right: 20%;
    :hover{opacity:98%}
    @media(max-width: 500px){
        position: relative;
        top:0; left: 0;
    } 
`