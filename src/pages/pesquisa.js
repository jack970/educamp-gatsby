import React from "react"
import { graphql } from 'gatsby' 
import Header from '../components/Header'
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Footer from '../components/Footer'
import CardSearch from "../components/CardSearch"
import NotFound from '../components/NotFound'
import { GridContainer } from '../components/CardSearch/styled'

const Pesquisa = ({data, location}) => {
  const allPosts = data.allMarkdownRemark.edges
  const params = new URLSearchParams(location.search.slice(1))
  const q = params.get("q") || ""

  const posts = allPosts || []

  const filteredData = posts.filter(post => {
    const { excerpt } = post.node
    const {title, description} = post.node.frontmatter

    return(
      title.toLowerCase().includes(q.toLowerCase()) ||
      description.toLowerCase().includes(q.toLowerCase()) ||
      excerpt.toLowerCase().includes(q.toLowerCase())
    )
    
  })

  const hasSearchResults = filteredData.length !== 0 && q !== ""
  const setposts = hasSearchResults ? filteredData : []

  return(
    <Layout>
      <SEO title={`Busca: ${q}`} />
      
      <Header
        title={`Resultado de Busca por: ${q}`}
        particulas="block"
        altura='17'
        />
        
        <GridContainer>
          { hasSearchResults ? (
            setposts.map(({node}, id) => {
              return(
                <CardSearch key={id}
                  title={node.frontmatter.title}
                  description={node.frontmatter.description}
                  content={node.excerpt}
                  date={node.frontmatter.date}
                  link={node.fields.slug}
                  />
              )
            })
          ) : (
            <NotFound />
          )}
        </GridContainer>
      <Footer />
    </Layout>
  )
}

export default Pesquisa

export const pageQuery = graphql`
  query SearchFilter {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(locale:"pt-br" ,formatString: "DD [de] MMMM [de] YYYY")
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`
