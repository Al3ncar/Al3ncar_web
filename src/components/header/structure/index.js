import React,{useState} from "react";
import Modal from "../mod/index"

import IgorFoto from "../imgs/eu-fund.png"
import Mark from "../imgs/logo1.png"
import Fig from "../imgs/figurinha.png"
import * as S from "../style/styled"

export default function App(){
  const [mods, setMods] = useState(false)
    return(
        <S.Header>
        <S.BackImg>
          <S.BoxMoji>
            <S.Moji src={Fig} alt=""/>
          </S.BoxMoji>
          <div className="w-100">
            <nav className="justify-content-space-around w-100 p-3">
              <S.List>
                <S.Anc>
                  <S.FItemLi to="home" offset={-100} duration={400}>INICIO</S.FItemLi>
                </S.Anc>
                <S.Anc>
                  <S.ItemLi to="sob" offset={-100} duration={400}>SOBRE</S.ItemLi>
                </S.Anc>
                <S.BoxLog onClick={() => setMods(true)}>
                  <img className="w-100" src={Mark} alt=""/>
                </S.BoxLog>
                {mods === true ? <Modal/> : null}
                <S.Anc>
                  <S.ItemLi to="port" offset={-100} duration={400}>PORTIFOLIO</S.ItemLi>
                </S.Anc>
                <S.Anc>
                  <S.ItemLi to="cont" offset={-100} duration={400}>CONTATO</S.ItemLi>
                </S.Anc>            
              </S.List>
            </nav>
          </div>
          <S.BoxText>
            <div className=" w-50 pt-5">
              <S.BoxTilt>
                <S.Titl>IGOR ALENCAR</S.Titl>
              </S.BoxTilt>
              <S.BoxOla>
                <S.Ola>
                  Olá eu sou <S.Bold>Igor Alencar</S.Bold>, sou um <S.Bold>desenvolver
                  Front-end web developer</S.Bold>, Html5, Css3, Js Vanilla, JSX, React.js, ReactHooks, Consumo de APi's.
                </S.Ola>
              </S.BoxOla>
            </div>
            <S.BoxImg>
              <S.Img src={IgorFoto} alt=""/>
            </S.BoxImg>
          </S.BoxText>
        </S.BackImg>
      </S.Header>
    )
}