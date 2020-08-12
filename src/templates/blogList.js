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

const BlogList = ({data, pageContext}) => {
    const postList = data.allMarkdownRemark.edges

    const { currentPage, numPages} = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/blog' : `blog/page/${currentPage - 1}`
    const nextPage = `/blog/page/${currentPage + 1}`

    return(
        <Layout>
            <SEO title='Blog' />
            <Header 
                title='Blog'
                secondtitle='Últimos artigos e novidades'
                particulas="block"
                altura='19'
            />
            <S.LayoutWrapper>
                <S.ArticleWrapper>
                    {postList.map(({node}, i) => (
                        <InsightsBlog key={i}
                            title={node.frontmatter.title}
                            image={node.frontmatter.image.childImageSharp.fluid}
                            date={node.frontmatter.date}
                            link={node.fields.slug}/>
                    ))}
                </S.ArticleWrapper>
                <SideBarBlog />
            </S.LayoutWrapper>
            <PaginationBlog 
                isFirst={isFirst}
                isLast={isLast}
                currentPage={currentPage}
                nextPage={nextPage}
                prevPage={prevPage}
                numPages={numPages}
            />
            <Footer />
        </Layout>
    )
}

export default BlogList

export const PostListQuery = graphql`
  query PostListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {fileAbsolutePath: {regex: "/Posts/"}}
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