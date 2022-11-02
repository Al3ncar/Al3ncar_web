import React from "react";

import IgorFoto from "../imgs/eu-fund.png"
import Mark from "../imgs/logo1.png"
import Fig from "../imgs/figurinha.png"
import * as S from "../style/styled"

export default function App(){
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
                  <S.FItemLi>INICIO</S.FItemLi>
                </S.Anc>
                <S.Anc>
                  <S.ItemLi>SOBRE</S.ItemLi>
                </S.Anc>
                <S.BoxLog>
                  <img className="w-100" src={Mark} alt=""/>
                </S.BoxLog>
                <S.Anc>
                  <S.ItemLi>PORTIFOLIO</S.ItemLi>
                </S.Anc>
                <S.Anc>
                  <S.ItemLi>CONTATO</S.ItemLi>
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
                  Olá eu sou Igor Alencar sou um desenvolver
                  Front-end web developer, Html5, Css3, Js Vanilla, JSX, React.js, ReactHooks, Consumo de APi's.
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