import React, {useState} from "react";
import {MapRepos} from "./Elements/MapRepos/index"
import {Pires, Destaque, Desafios} from "./Elements/Portfolios/index"
import Search from "../../img/search.png"
import Nuka from "nuka-carousel"
import * as S from "../../style/styled"

const settings = {
    wrapAround: true,
    slidesToShow: 3,
    cellAlign: "center",
    adaptiveHeight: false,
    swiping: true,
    autoplay: true
};

export default function App() {
    const [Filt, setFilt] = useState("")
    const Filtrar = Pires.filter((r) => r.name.includes(Filt))
    return (
        <S.Conteiner>
            <div className="w-100 d-flex justify-content-center">
                <S.BuscRepos>
                    <S.TiltPort id="port">PORTIFOLIOS</S.TiltPort>
                    <S.Busc>
                        <S.Put
                            type="search"
                            placeholder="Procure meus Portifolio aqui..."
                            value={Filt}
                            onChange={e => setFilt(e.target.value)}/>
                        <S.BuscIcon>
                            <img src={Search} alt="Icone Busca" className="w-100"/>
                        </S.BuscIcon>
                    </S.Busc>
                </S.BuscRepos>
            </div>
            <S.ContFils>
                <S.TitlRepos>Todos os Repositório</S.TitlRepos>
                <Nuka {...settings}>
                    {Filtrar.length === 0
                        ? (<S.Parg>Repositório Não encontrado</S.Parg>)
                        : (Filtrar.map((item) => (<MapRepos key={item.id} name={item.name} img={item.img}/>)))}

                </Nuka>
                <S.TitlRepos>Destaque</S.TitlRepos>
                <Nuka {...settings}>
                    {Filtrar.length === 0
                        ? (<S.Parg>Repositório Não encontrado</S.Parg>)
                        : (Destaque.map((item) => (<MapRepos key={item.id} name={item.name} img={item.img}/>)))}

                </Nuka>
                <S.TitlRepos>Desafios</S.TitlRepos>
                <Nuka {...settings}>
                    {Filtrar.length === 0
                        ? ( <S.Parg>Repositório Não encontrado</S.Parg>)
                        : (Desafios.map((item) => (<MapRepos key={item.id} name={item.name} img={item.img}/>)))}
                </Nuka>
            </S.ContFils>
        </S.Conteiner>
    )
}