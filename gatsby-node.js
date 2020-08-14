const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const _ =  require('lodash')

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    fmImagesToRelative(node); 
  
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ 
          node, 
          getNode, 
          basePath: `pages` })
  
      createNodeField({
        node,
        name: `slug`,
        value: `/${slug.slice(12)}`,
      })
    }
  }

  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // Query for markdown nodes to use in creating pages.
    return graphql(
      `
      {
        postRemark: allMarkdownRemark(
          filter: {
            fileAbsolutePath: {
              regex: "/Posts/"
            }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
            next {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
            previous {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        postProducts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/Produtos/"}}) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        postEmpresa: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/Empresa/"}}) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
      `
    ).then(result => {
        const posts = result.data.postRemark.edges
        const products = result.data.postProducts.edges
        const empresa = result.data.postEmpresa.edges

        posts.forEach(({node, next, previous}) => {
            createPage ({
                path: `${_.kebabCase(node.fields.slug)}`,
                component: path.resolve('./src/templates/blogPost.js'),
                context: {
                    slug: node.fields.slug,
                    next: next,
                    previous: previous
                }
            })
        })

        empresa.forEach(({node}) =>{
          createPage ({
            path: `${_.kebabCase(node.fields.slug)}`,
            component: path.resolve('./src/templates/EmpresaPost.js'),
            context: {
                slug: node.fields.slug,
            }
        })

        })

        products.forEach(({node}) => {
          createPage ({
            path: `${_.kebabCase(node.fields.slug)}`,
            component: path.resolve('./src/templates/ProductsPost.js'),
            context: {
              slug: node.fields.slug
            }
          })
        })

        const postsPerPage = 8
        const numPages = Math.ceil(posts.length / postsPerPage)

        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? '/blog' : `/blog/page/${i + 1}`,
            component: path.resolve('./src/templates/blogList.js'),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1
            }
          })
        })

        const productsPerPage = 8
        const productsNumPages = Math.ceil(products.length / productsPerPage)
        
        Array.from({ length: productsNumPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? '/produtos' : `/produtos/page/${i + 1}`,
            component: path.resolve('./src/templates/ProductList.js'),
            context: {
              limit: productsPerPage,
              skip: i * productsPerPage,
              productsNumPages,
              currentPage: i + 1
            }
          })
        })
    })
  } 