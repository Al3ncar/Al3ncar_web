import styled from "styled-components"
import Back from "../imgs/back.png"

export const Header = styled.header`
    width: 100%; height: 96vh;
`
export const BackImg = styled.section`
    width: 97%; height: 100%;
    margin: 1.5%;   
    background-image: url(${Back});
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    
    position: relative;
    ::after{
        content: "";
        width:22%; height:45%;
        background-color: black;
        padding: 2% 0 35% 0;
        position: absolute;
        right: 1.5%;
        top: 50%;
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
`
export const Anc = styled.a`
    width: 100%;
    text-decoration: none;
    text-align: center;
    color:black;
`
export const ItemLi = styled.li`
    width: 100%;
    text-align: center;
    font-size: 1.1vw;
    color: black;
    :hover{
        transform: scale(1.1);
        cursor:pointer;
    }
`
export const FItemLi = styled.li`
    width: 100%;
    text-align: center;
    font-size: 1.3vw;
    font-weight: bolder;
    color:white;
    z-index: 2;
    :hover{
        transform: scale(1.1);
        cursor:pointer;
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
`
export const Titl = styled.h1` 
    width:85%;
    font-size:6.5vw;
    font-weight: bolder;
    color:black;
    text-align: right;
`
export const BoxOla = styled.div`
    width: 85%;
    padding: 2% 0 15% 0;
    text-align: right;
    display: flex;
    justify-content: end;
`
export const Ola = styled.p`
    width: 70%;
    font-size: 1vw;
    
`
export const BoxImg = styled.div`
    width: 40%; height: 100%;
    z-index: 2;
    margin-top:3%;
    display:flex;
    justify-content: end;
    align-items: flex-end;
    background-color: black;
    position: relative;
    
`     

export const Img = styled.img`
    width: 30vw;
    border-radius:50%;
    position: absolute;
    top:60%; right: 20%;
`