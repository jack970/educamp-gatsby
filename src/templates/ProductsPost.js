import React from "react"
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import ProductsSection from '../components/ProductsSection'
import InsightsHome from "../components/InsightsHome"
import Footer from '../components/Footer'

const Produtos = ({data, PageContext}) => {
    const product = data.markdownRemark
  return(
    <Layout>
      <SEO title={`Produto: ${product.frontmatter.title}`} 
      description={product.frontmatter.description}/>
      <Header
        title={product.frontmatter.title}
        particulas="block"
        secondtitle={product.frontmatter.description}
        altura='19'
        />
      <ProductsSection 
        title={product.frontmatter.title}
        conteudo={{__html: product.html}}
        price={product.frontmatter.price}
        image={product.frontmatter.image}
        image1={product.frontmatter.image1}
        image2={product.frontmatter.image2}
      />
      <InsightsHome
        title="Insight Noticias"
        columns="3"
      />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
    query PostProducts($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                date(locale:"pt-br" ,formatString: "DD [de] MMMM [de] YYYY")
                description
                title
                price
                image {
                    childImageSharp {
                        fluid(maxWidth: 1100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
                image1 {
                    childImageSharp {
                        fluid(maxWidth: 700, maxHeight: 700) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
                image2 {
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

export default Produtos
