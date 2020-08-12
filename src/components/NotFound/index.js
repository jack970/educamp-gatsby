import React from 'react'
import * as S from '../CardSearch/styled'
import Search from '../Search'

const NotFound = () => {

    return(
        <S.LayoutWrapper>
            <S.TitlePost>Nada foi encontrado</S.TitlePost>
            <S.ContentPost>Desculpe, mas nada foi encontrado com os termos da sua pesquisa. Por favor, tente novamente com algumas palavras-chave diferentes.</S.ContentPost>
            <Search />
        </S.LayoutWrapper>
    )
}

export default NotFound