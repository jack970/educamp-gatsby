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
        descricao='Você é um cliente especial! Para agradecer essa parceria, gostaríamos de oferecer à você uma oportunidade exclusiva. Fale com o nosso representante.'
        altura='20'
        />
      <FormContact />
      <Footer />
    </Layout>
  )
}

export default ContatoPage