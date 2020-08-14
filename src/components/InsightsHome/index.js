import React from 'react'
import * as S from './styled.js'
import { graphql, useStaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'

const InsightsBlog = ({title, columns}) => {
    const data = useStaticQuery(graphql`
        query PostHomeQuery {
            allMarkdownRemark( 
            filter: {fileAbsolutePath: {regex: "/Posts/"}}
            limit: 3,
            sort: { fields: frontmatter___date, order: DESC }
            ) {
            edges {
                node {
                fields {
                    slug
                }
                frontmatter {
                    title
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
    `)

    return(
        <S.LayoutWrapper>
            <S.TitleWrapper>{title}</S.TitleWrapper>
            <S.DivRight>
                <S.LinkPost to='/blog'>
                    <S.ButtonBlog>
                        Leia o Blog
                    </S.ButtonBlog>
                </S.LinkPost>
            </S.DivRight>
            <S.ArticleWrapper theme={{ columns: columns}}>
                {data.allMarkdownRemark.edges.map(({node}, i) => (
                    <S.LinkPost to={`/${kebabCase(node.fields.slug)}`} key={i}>
                        <S.ImagePost fluid={node.frontmatter.image.childImageSharp.fluid}/>
                        <S.TitlePost>
                            {node.frontmatter.title}
                        </S.TitlePost>
                        <S.ButtonPost>
                            Leia Mais
                        </S.ButtonPost>
                    </S.LinkPost>
                ))}
            </S.ArticleWrapper>
        </S.LayoutWrapper>
    )
}

export default InsightsBlog