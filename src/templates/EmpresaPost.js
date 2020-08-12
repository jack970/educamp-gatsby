import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'
import Footer from '../components/Footer'

const BlogPost = ({data}) => {
    const post = data.markdownRemark
    
    return(
        <Layout>
            <SEO title={post.frontmatter.title} 
            description={post.frontmatter.description}/>
            <Header
                title={post.frontmatter.title}
                particulas="block"
                secondtitle={post.frontmatter.description}
                altura='18'
            />
            <S.MainContent>
                <div dangerouslySetInnerHTML={{__html: post.html}}></div>
            </S.MainContent>
            <Footer />
        </Layout>
    )
}

export const query = graphql`
    query EmpresaPost($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                date(locale:"pt-br" ,formatString: "DD [de] MMMM [de] YYYY")
                description
                title
            }
            html
        }
    }
    `

export default BlogPost