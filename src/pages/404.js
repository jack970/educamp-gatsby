import React from "react"
import Footer from '../components/Footer'
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Header from '../components/Header'
import {IconError} from '../components/SideBarBlog/Icon'
import Search from '../components/Search'
import * as S from '../components/Error'

const NotFoundPage = () => {
  return(
    <Layout>
      <SEO title="404: Nada foi encontrado." />
      <Header title="404" 
        secondtitle="Nada foi encontrado nesta Página."
      />
      <S.LayoutWrapper>
        <span>
          <IconError />
          <p style={{ margin: '1rem'}}>Desculpe, 
            mas você tentou acessar uma página que não existe</p>
        </span>
        <Search />
      </S.LayoutWrapper>
      <Footer />
    </Layout>
  )
}
export default NotFoundPage
