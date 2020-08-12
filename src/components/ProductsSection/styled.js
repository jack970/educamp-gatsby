import styled from 'styled-components'
import Img from 'gatsby-image'
import media from 'styled-media-query'

export const LayoutWrapper = styled.div`
    padding-top: 2rem;
    list-style: none;`

export const ProductsDetails = styled.div``

export const CustomPanel = styled.div`
    max-width: 50%;
    margin: auto;

    ${media.lessThan("medium")`
        max-width: 100%;
    `}
`

export const ProductsImages = styled(Img)`
    max-height: 35rem;

    
`

export const ProductsPrice = styled.h1`
    font-weight: 700;
    font-size: 30px;
    color: #333;
`

export const ProductsImage = styled.div`

    ul {
        display: flex;
        justify-content: center;
        flex-direction: row;
        text-align: center;

        li {
            width: 190px;
            cursor: pointer;
            margin: 0 5px;
        }
    }

    li {
        margin-bottom: 3rem;
    }
`