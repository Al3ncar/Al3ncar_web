import React from "react";
import EuMoji from "../../img/eufig.png"
import * as S from "../../style/styled"

export default function Findex() {
    return (
        <S.Cont>
            <S.ContBox>
                <img src={EuMoji} alt="" className="w-100"/>
            </S.ContBox>
            <S.Sobre>
                <div className="w-100">
                    <S.SobreTilt id="sob">SOBRE</S.SobreTilt>
                </div>
                <S.SobreText>
                    <S.ElementLeft/>
                    <S.Text>
                        Eu sou Igor Alencar, um programador apaixonado no que faço, além da grande vontade de aprender mais e mais, sempre aberto a desafio e conselhos, sendo meu foco crescer profissionalmente e pessoalmente. Estou com 1 ano de experiência como front-end, atuando com JS Vanilla, React.js, Styled-Components.
                    </S.Text>
                    <S.Text>
                        Eu tenho uma excelente habilidade de se comunicar, além da grande nescessidade
                        de aprender e evoluir. Estou preparado para qualquer desafio, aberto a criticas
                        e orientações. Crescer pra mim é fundamental e acredito no meu potêncial.
                    </S.Text>
                    <S.ElementRight/>
                </S.SobreText>
            </S.Sobre>
        </S.Cont>
    )
}