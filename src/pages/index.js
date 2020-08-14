import React from "react"
import Header from '../components/Header'
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import ImageLeft from "../components/ImageLeft"
import Parcerias from "../components/Parcerias"
import InsightsHome from "../components/InsightsHome"
import Footer from '../components/Footer'

const IndexPage = () => {

  return(
    <Layout>
      <SEO title="Home" />
      <Header
        title='Representando a força do campo.'
        particulas="none"
        descricao='Você é um cliente especial! Para agradecer essa parceria, gostaríamos de oferecer à você uma oportunidade exclusiva. Fale com o nosso representante.'
        altura='20'
        />
      <ImageLeft />
      <Parcerias />
      <InsightsHome
        title="Insight Noticias"
        columns="3"
      />
      <Footer />
    </Layout>
  )
}

export default IndexPage
