import React, {useState} from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './styled'
import Search from '../Search'
import { kebabCase } from 'lodash'
import Modal from '../Modal'

const SideBarBlog = ({iterateList, categoriesTitle}) => {
    const data = useStaticQuery(graphql`
        query ProductsList {
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
                filter: {fileAbsolutePath: {regex: "/Produtos/"}}
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    
    `)
    const productList = data.allMarkdownRemark.edges
    const [showModal, setModal] = useState(false)

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
            <S.ButtonModal onClick={() => setModal(!showModal)}>
                FAZER ORÇAMENTO
            </S.ButtonModal>
            <Modal open={showModal} setModal={setModal} productList={productList}/>
        </S.SideBarWrapper>
    )
}

export default SideBarBlog