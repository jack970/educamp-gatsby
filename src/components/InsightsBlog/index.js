import React from 'react'
import * as S from './styled.js'
import {kebabCase} from 'lodash'

const InsightsBlog = ({title, image, date, link}) => {
    return(
        <S.LinkPost to={`/blog/${kebabCase(link)}`}>
            {image && (
                <S.ImagePost fluid={image} />
            )}
            <S.TitlePost>
                {title}
            </S.TitlePost>
            <S.DatePost>
                Publicado em {date}
            </S.DatePost>
            <S.ButtonPost>
                Leia Mais
            </S.ButtonPost>
        </S.LinkPost>
    )
}

export default InsightsBlog