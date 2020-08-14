import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import media from 'styled-media-query'

export const LayoutWrapper = styled.div`
    margin-bottom: 60px;
    padding: 2rem 8rem;
    grid-template-columns: repeat(6,1fr);
    grid-template-rows: 360px auto;
    grid-gap: 45px 110px;

    display: grid;

    ${media.lessThan("medium")`
        display: block;
        grid-template-columns: auto;
        grid-template-rows: auto;
    `}

    ${media.lessThan("small")`
        padding: 1rem;
    `}
`

export const TitleWrapper = styled.h1`
    font-size: 1.65rem;
    font-weight: 700;
    margin-bottom: 2rem;

    ::before {
        content: '';
        display: inline-block;
        top: 10px;
        vertical-align: bottom;
        margin-right: 1rem;
        width: 0;
        height: 1em;
        border-left: 4px solid #177330;
    }
`

export const ArticleWrapper = styled.article`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-column: 1/span 6;
    grid-row: 1/span 2;
    grid-gap: 35px;

    ${media.lessThan("medium")`
        display: block;
        grid-template-columns: auto;
        grid-template-rows: auto;
    `}

    a:nth-of-type(2n) {
        grid-column-start: 3;
    }

    a:nth-of-type(2) {
        grid-column: 4/span 3;

    }

    a:nth-of-type(odd) {
        grid-column-start: 1;
    }

    a:first-of-type {
        grid-column: 1/span 3;
    }
`

export const ImagePost = styled(Img)`
    border-top-right-radius: 15px;
    max-height: 20rem;
`

export const LinkPost = styled(Link)`
    grid-column-end: span 2;

    ${media.lessThan("large")`
        display: block;
        margin: 5rem auto;
    `}

    ${media.lessThan("medium")`
        display: block;
        margin: 2rem auto;
    `}
`

export const TitlePost = styled.h1`
    padding: 15px 0 10px;
    color: #000;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.3;
`

export const DatePost = styled.p`
    font-size: 1rem;
    color: #a5acb5;
    margin: 0;
    padding-bottom: 1rem;
`

export const ButtonPost = styled.button`
    padding: .5rem .9rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .2rem;
    background-color: transparent;
    border: 1px solid transparent;
    color: #37AA53;
    border-color: #37AA53;  
    background-color: transparent;
    cursor: pointer;
    transition-duration: 0.4s;

    :hover {
        color: #fff;
        background-color: #37AA53;
        border-color: #37AA53;
    }
    
`

export const LayoutProductsWrapper = styled.div`
    margin-bottom: 60px;
    padding: 2rem 8rem;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: 360px auto;
    grid-gap: 45px 110px;
    display: grid;

    ${media.lessThan("large")`
        display: block;
        grid-template-columns: auto;
        grid-template-rows: auto;
    `}

    ${media.lessThan("small")`
        padding: 1rem;
    `}
`


export const ArticleProducts = styled.article`
    display: grid;
    grid-template-columns: repeat(8,1fr);
    grid-column: 1/span 6;
    grid-row: 1/span 2;
    grid-gap: 35px;

    ${media.lessThan("large")`
        display: block;
        margin-bottom: 3rem;
        grid-template-columns: auto;
        grid-template-rows: auto;
    `}

    a:nth-of-type(5) {
        grid-column-start: 1;
    }

    a:nth-of-type(8n) {
        grid-column-start: 1;
    }

    a:nth-of-type(2) {
        grid-column: 3/span 2;

    }

 
`