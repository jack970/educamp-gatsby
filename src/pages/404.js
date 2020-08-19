import React from "react"
import Footer from '../components/Footer'
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Header from '../components/Header'
import {IconError} from '../components/SideBarBlog/Icon'
import Search from '../components/Search'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Nada foi encontrado." />
    <Header title="404" 
      secondtitle="Nada foi encontrado nesta Página."
    />
    <div style={{ textAlign: 'center', margin: '2rem auto'}}>
      <span>
        <IconError />
      </span>
      <p>Desculpe, mas você tentou acessar uma página que não existe</p>
    </div>
    <Search />
    <Footer />
  </Layout>
)

export default NotFoundPage
