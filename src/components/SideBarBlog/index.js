import React from 'react'
import * as S from './styled'
import Search from '../Search'

const SideBarBlog = () => {
    
    return(
        <S.SideBarWrapper>
            <S.SearchWrapper>
                <S.Title>Buscar</S.Title>
                <Search />
            </S.SearchWrapper>
            {/* <S.ArchivesWrapper>
                <S.Title>Arquivos</S.Title>
                <S.SelectArchives>
                    <option value>Selecionar o mês</option>
                    <option value='/'>Teste</option>
                    <option value='/'>Teste</option>
                    <option value='/'>Teste</option>
                    <option value='/'>Teste</option>
                    <option value='/'>Teste</option>
                </S.SelectArchives>
            </S.ArchivesWrapper>
            <S.CategoriesWrapper>
                <S.Title>Últimos Posts</S.Title>
                <S.CategoriasMenu>
                    <S.CategoriasList>
                        <S.CategoriasLink to='/'>Teste</S.CategoriasLink>
                    </S.CategoriasList>
                </S.CategoriasMenu>
            </S.CategoriesWrapper> */}
        </S.SideBarWrapper>
    )
}

export default SideBarBlog