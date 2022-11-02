import React from "react";
import * as S from "../style/styled"

import IconE from "../img/IconEmail.jpg"
import IconG from "../img/IconGit.png"
import IconL from "../img/IconLink.jpg"
import Logo from "../img/logo1.png"

export default function Footer() {
    return (
        <footer>
            <S.Cont>
                <div>
                    <S.Titl>CONTATO</S.Titl>
                </div>
                <S.FormCont>
                    <S.PutCont>
                        <S.Put type="email" placeholder="Me mande uma mensagem..."/>
                        <S.Btn type="submit" value="ENVIAR"/>
                    </S.PutCont>
                </S.FormCont>
                <S.BoxRedes>
                    <S.BoxElement>
                        <S.Anc href="#" target="_blank">
                            <S.BoxImg href="alencar29htcss@gmail.com">
                                <img src={IconE} alt="Icone de redes Sociais" className="w-100"/>
                            </S.BoxImg>
                            <S.ContParg>
                                <S.Parg>
                                    Al3ncar@gmail.com
                                </S.Parg>
                            </S.ContParg>
                        </S.Anc>
                    </S.BoxElement>
                    <S.BoxElement>
                        <S.Anc href="https://github.com/Al3ncar" target="_blank">
                            <S.Git>
                                <S.ImgGit src={IconG} alt="Icone de redes Sociais"/>
                            </S.Git>

                            <S.ContParg>
                                <S.Parg>
                                    https://github.com/Al3ncar
                                </S.Parg>
                            </S.ContParg>
                        </S.Anc>
                    </S.BoxElement>
                    <S.BoxElement>
                        <S.Anc href="https://www.linkedin.com/in/igoralencar/" target="_blank">
                            <S.BoxImg>
                                <img src={IconL} alt="Icone de redes Sociais" className="w-100"/>
                            </S.BoxImg>
                            <S.ContParg>
                                <S.Parg>
                                    Igor Bastos</S.Parg>
                            </S.ContParg>
                        </S.Anc>

                    </S.BoxElement>
                </S.BoxRedes>
                <div className="w-100 d-flex">
                    <S.BoxNav>
                        <img src={Logo} alt="logo Alencar" className="w-100"/>
                    </S.BoxNav>
                    <div className="w-100">
                        <nav className="d-flex justify-content-end w-100 p-3">
                            <S.List>
                                <S.AncNav>
                                    <S.ItemLi>Inicio</S.ItemLi>
                                </S.AncNav>
                                <S.AncNav>
                                    <S.ItemLi>Sobre</S.ItemLi>
                                </S.AncNav>
                                <S.AncNav>
                                    <S.ItemLi>Portifolio</S.ItemLi>
                                </S.AncNav>
                                <S.AncNav>
                                    <S.ItemLi>Contato</S.ItemLi>
                                </S.AncNav>
                            </S.List>
                        </nav>
                    </div>
                </div>
            </S.Cont>
        </footer>
    )
}
