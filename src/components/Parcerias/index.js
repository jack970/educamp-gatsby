import React from 'react'
import * as S from './styled.js'
import { useStaticQuery, graphql } from 'gatsby'

const Parcerias = () => {
    const imgs = useStaticQuery(graphql`
    query allimgQuery {
        source: allFile(filter: { absolutePath: { regex: "/images/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)

    return(
        <S.LayoutWrapper>
            <S.Descricao>
                <h1>Empresas que confiam em nossas soluções</h1>
                <p>A parceria formada em 2018 nos permitiu criar e sistematizar um processo robusto de leitura e entendimento das relações dentro e fora do ambiente competitivo, como também pensar o futuro da organização através de prospecções de cenários.</p>
            </S.Descricao>
            <S.Clientes>
                <S.ClienteUl>
                    {imgs.source.edges.map(({node}, id) => (
                        <S.ClienteLi key={id}>
                            <S.ClienteImg fluid={node.childImageSharp.fluid} />
                        </S.ClienteLi>
                    ))}
                </S.ClienteUl>
            </S.Clientes>
        </S.LayoutWrapper>
    )
}

export default Parcerias