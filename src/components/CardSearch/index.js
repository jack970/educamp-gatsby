import React from 'react'
import * as S from './styled.js'
import { kebabCase } from 'lodash'
const CardSearch = ({title, date, link, content}) => {
    return(
        <S.LayoutWrapper>
            <S.LinkPost to={`/blog/${kebabCase(link)}`}>
                <S.TitlePost>{title}</S.TitlePost>
                <S.ContentPost>{content}</S.ContentPost>
                <S.DatePost>{date}</S.DatePost>
            </S.LinkPost>
        </S.LayoutWrapper>
    )
}

export default CardSearch