import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'
import PaginationPost from '../components/PaginationPost'
import Footer from '../components/Footer'

const BlogPost = ({data, pageContext}) => {
    const post = data.markdownRemark
    const { next, previous} = pageContext
    
    return(
        <Layout>
            <SEO title={post.frontmatter.title} 
            description={post.frontmatter.description} />
            <Header
                title={post.frontmatter.title}
                particulas="block"
                secondtitle={post.frontmatter.description}
                altura='18'
            />
            <S.PostHeader>
                <S.PostImage fluid={post.frontmatter.image.childImageSharp.fluid} />
                <S.PostDate>
                Publicado em {post.frontmatter.date}
                </S.PostDate>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{__html: post.html}}></div>
            </S.MainContent>
            <PaginationPost
            next={next}
            previous={previous}
            />
            <Footer />
        </Layout>
    )
}

export const query = graphql`
    query blogPost($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                date(locale:"pt-br" ,formatString: "DD [de] MMMM [de] YYYY")
                description
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 1100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
            html
        }
    }
    `

export default BlogPost