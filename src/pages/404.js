import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Nada foi encontrado.</h1>
    <p>Desculpe, mas você tentou acessar uma página que não existe</p>
  </Layout>
)

export default NotFoundPage
