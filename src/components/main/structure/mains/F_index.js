import React from "react";
import EuMoji from "../../img/eufig.png"
import * as S from "../../style/styled"

export default function Findex() {
    return (
        <S.Cont>
            <S.ContBox className="w-50">
                <img src={EuMoji} alt="" className="w-100"/>
            </S.ContBox>
            <S.Sobre>
                <div className="w-75">
                    <S.SobreTilt>SOBRE</S.SobreTilt>
                </div>
                <S.SobreText>
                    <S.ElementLeft/>
                    <p className="w-50">
                        Eu sou Igor Alencar, tenho 17 anos e estou cursando o ensino médio, busco
                        resultados comprometidos para o desenvolvimento cultural e capital da empresa,
                        sempre aprendendo e crescendo nas entregas dos projetos, valorizando o trabalho
                        em equipe e as experiências trocadas. Visando um bom relacionamento entre
                        conjuto, sempre agregando boas praticas e valores para o time/equipe.
                    </p>
                    <p className="w-50">
                        Eu tenho uma excelente habilidade de se comunicar, além da grande nescessidade
                        de aprender e evoluir. Estou preparado para qualquer desafio, aberto a criticas
                        e orientações. Crescer pra mim é fundamental e acredito no meu potêncial.
                    </p>
                    <S.ElementRight/>
                </S.SobreText>
            </S.Sobre>
        </S.Cont>
    )
}