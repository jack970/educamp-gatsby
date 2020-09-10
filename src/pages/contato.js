import React from "react"
import Header from '../components/Header'
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Footer from '../components/Footer'
import FormContact from "../components/FormContact"

const ContatoPage = () => {

  return(
    <Layout>
      <SEO title="Contato" />
      <Header
        title='Contato'
        particulas="block"
        descricao='Entre em contato conosco. Nossa empresa agradece.'
        altura='20'
        />
      <FormContact />
      <Footer />
    </Layout>
  )
}

export default ContatoPage