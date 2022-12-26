import styled from "styled-components";
import Din from "../img/eudin.png"

export const Cont = styled.section`
    width: 97%;
    background-color: black;
    margin:0 1.5% 1.5% 1.5%;
`
export const Titl = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 2.7vw;
    font-weight: bolder;
    color:white;
    padding: 4% 2% 1% 2%;
    @media(max-width:1200px){  }
`
export const FormCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const PutCont = styled.div`
    width: 40%;
    position: relative;
    margin-top: 1%;
    padding-top: 0.25%;
    ::before{
        content: "";
        background-image: url(${Din});
        background-size: cover;
        background-position: 50%;
        width: 15%;
        position: absolute;
        bottom:57%; right: 0%;
        padding: 15%;
        opacity:0%;
        transform: translateX(-150px);
        transition: ease-in-out 2s;
    }
    :hover::before{
       opacity:100%;
       transform: translate(0);
    }
`
export const Put = styled.input`
    width: 97%;
    background-color: transparent;
    border-right: none;
    color: white;
    border: solid 0.4vw white;
    border-radius:2vw;
    position: relative;
    outline: none;
    padding: 2% 0 2% 2%;
    ::placeholder{
        color: white;
        font-size: 1vw;
    }

`
export const Btn = styled.input`
    width: 35%;
    border-radius:2vw;
    position: absolute;
    bottom:0; right: 0;
    padding: 3.05%;
    border: none;
`
export const BoxRedes = styled.div`
    width:100%;
    display: flex;
    justify-content: center; 
`
export const BoxElement = styled.div`
    width: 20%; 
    margin-top: 5%;
    text-decoration:none;
`
export const BoxImg = styled.div`
    width:10%;
    display: flex;
    align-items: center;
    transition: ease-in-out 0.2s;
    :hover{transform: scale(1.1);}
    img{width: 100%;}
`
export const Git = styled.div`
    width: 20%;
    transition: ease-in-out 0.2s;
    :hover{transform: scale(1.1);}
`
export const ImgGit = styled.img`
    width: 100%;
    border-radius: 50%;
`
export const Anc = styled.a`
    width: 100%;
    display: grid;
    place-items:center;
    justify-content: center;
    text-decoration:none;

`
export const Parg = styled.p`
    color: white;
    padding: 4% 0 0 0 ;
    font-weight: bolder;
    transition: ease-in-out 0.2s;
    :hover{
        transform: scale(1.1);
        text-decoration: underline ;     
    }
`
export const ContParg = styled.div`
    width: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
`
export const BoxNav = styled.div`
    width: 15%;
    position: relative;
    img{
        position: absolute;
        bottom: 0; left: 0;
    }
    ::before{
        content:"";
        width:40%;
        padding: 30%;
        clip-path: polygon(0 0, 44% 42%, 100% 100%, 0% 100%);
        background-color: white;
        position: absolute;
        bottom: 0; left: 0;
    }
`
export const List = styled.ul`
    width: 72%;
    border-radius: 0.3vw;
    padding: 0 0 1% 0;
    display: flex;
    justify-content: flex-end;
    list-style: none;
`
export const AncNav = styled.a`
    width: 30%;
    text-decoration: none;
    text-align: right;
`
export const ItemLi = styled.li`
    width: 100%;
    text-align: center;
    font-size: 1.1vw;
    font-weight: bolder;
    color:white;
    :hover{
        transform: scale(1.1);
        cursor:pointer;
    }
`