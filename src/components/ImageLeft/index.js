import React from 'react'
import * as S from './styled.js'
import { useStaticQuery, graphql } from 'gatsby'

const ImageLeft = () => {
    const img = useStaticQuery(graphql`
    query ImageLeft {
        file(relativePath: {eq: "avaliacao.png"}) {
          childImageSharp {
            fluid(maxWidth: 1100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `)

    return(
        <S.LayoutWrapper>
          
            <S.ImageLink to='/'>
                  <S.ImageLeft fluid={img.file.childImageSharp.fluid} />
              </S.ImageLink>
              <S.Content>
                  <h2>Produtos da marca</h2>
                  <p>Monitore tudo sobre sua marcas nas mídias tradicionais e sociais.</p>'
              </S.Content>
          
        </S.LayoutWrapper>
    )
}

export default ImageLeft