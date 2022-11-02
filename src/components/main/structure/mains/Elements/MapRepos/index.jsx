import React from "react"
import * as S from "./styled"
export const MapRepos= ({ name, img, id}) =>{
    return(
        <>
            <S.Cont key={id}>
                <S.Card>
                    <S.Titl>{name}</S.Titl>
                    <S.CardImg>
                        <img src={img} alt={name} className="w-100"/>
                    </S.CardImg>
                </S.Card>
            </S.Cont> 
        </>
    )
}