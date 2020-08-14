import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout/layout'
import Header from '../components/Header'
import SEO from '../components/seo'
import * as S from '../components/InsightsBlog/styled'
import SideBarBlog from '../components/SideBarBlog'
import InsightsBlog from '../components/InsightsBlog'
import PaginationBlog from "../components/PaginationBlog"
import Footer from "../components/Footer"

const ProductList = ( {data, pageContext}) => {
    const postList = data.allMarkdownRemark.edges

    const { currentPage, productsNumPages} = pageContext
    const isFirst = currentPage === 1

    const isLast = currentPage === productsNumPages
    const prevPage = currentPage - 1 === 1 ? '/produtos' : `produtos/page/${currentPage - 1}`
    const nextPage = `/produtos/page/${currentPage + 1}`

    console.log(productsNumPages)
    return(
        <Layout>
            <SEO title='Produtos' />
            <Header 
                title='Todos os Produtos'
                secondtitle='Veja os produtos listados'
                particulas="block"
                altura='19'
            />
            <S.LayoutProductsWrapper>
              <S.ArticleProducts>
                    {postList.map(({node}, i) => (
                        <InsightsBlog key={i}
                            title={node.frontmatter.title}
                            image={node.frontmatter.image.childImageSharp.fluid}
                            date={node.frontmatter.date}
                            link={node.fields.slug}/>
                    ))}
              </S.ArticleProducts>
                <SideBarBlog 
                  categoriesTitle="Produtos"
                  iterateList={postList}
                />
            </S.LayoutProductsWrapper>
             <PaginationBlog 
                isFirst={isFirst}
                isLast={isLast}
                currentPage={currentPage}
                nextPage={nextPage}
                prevPage={prevPage}
                numPages={productsNumPages}
            />
            <Footer />
        </Layout>
    )
}

export default ProductList

export const PostListQuery = graphql`
  query ProductsListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {fileAbsolutePath: {regex: "/Produtos/"}}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(locale:"pt-br" ,formatString: "DD [de] MMMM [de] YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 1100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`