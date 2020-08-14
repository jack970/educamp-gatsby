import React from 'react'
import * as S from './styled'
import Search from '../Search'
import { kebabCase } from 'lodash'

const SideBarBlog = ({iterateList, categoriesTitle, currentPage}) => {
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
            </S.ArchivesWrapper> */}
            <S.CategoriesWrapper>
                <S.Title>{categoriesTitle}</S.Title>
                <S.CategoriasMenu>
                    {iterateList.slice(0,17).map(({node}, id) => (
                    <S.CategoriasList key={id}>
                        <S.CategoriasLink to={`/${kebabCase(node.fields.slug)}`}>{node.frontmatter.title}</S.CategoriasLink>
                    </S.CategoriasList>
                    ))}
                </S.CategoriasMenu>
            </S.CategoriesWrapper>
        </S.SideBarWrapper>
    )
}

export default SideBarBlog