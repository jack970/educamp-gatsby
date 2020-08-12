import React from 'react'
import {Link} from 'gatsby'
import * as S from './styled'
import propTypes from 'prop-types'

const PaginationBlog = ({isFirst, isLast, currentPage, numPages, prevPage, nextPage}) => (
    <S.LayoutWrapper>
        <S.PaginationWrapper>
            {
            !isFirst && <Link to={prevPage}> ← Página Anterior </Link>
            }
            <p>{currentPage} de {numPages}</p>
            {
            !isLast && <Link to={nextPage}> Próxima Página → </Link>
            }
        </S.PaginationWrapper>
    </S.LayoutWrapper>
)

PaginationBlog.prototype = {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentPage: propTypes.number.isRequired,
    numPages: propTypes.number.isRequired,
    prevPage: propTypes.number,
    nextPage: propTypes.number,
}

export default PaginationBlog