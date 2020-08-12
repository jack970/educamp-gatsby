import React from 'react'
import * as S from './styled'
import { IconLeft, IconRight} from './Icon'
import { kebabCase } from 'lodash'

const PaginationPost = ({next, previous}) => {
    return(
    <S.LayoutWrapper>
      <S.RecommendedWrapper>
        {
          previous && (

            <S.RecommendedLink
                to={`/blog/${kebabCase(previous.fields.slug)}`}
                className='previous'
              >
                <IconRight />
                <h1 className='h5'> Anterior <br/>
                    <p>{previous.frontmatter.title}</p>
                </h1>
                
            </S.RecommendedLink>
          )
        }
        { next && (
          <S.RecommendedLink
              to={`/blog/${kebabCase(next.fields.slug)}`}
              className='next'
          >
            <h1 className='h5'>Próximo <br/>
                <p>{next.frontmatter.title}</p>
            </h1>
            <IconLeft />
          </S.RecommendedLink>
        )}
      </S.RecommendedWrapper>
    </S.LayoutWrapper>
)}

export default PaginationPost