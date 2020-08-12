import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import media from 'styled-media-query'

export const LayoutWrapper = styled.div`
    margin-bottom: 60px;
    margin: 2rem 3.7rem;

    ${media.lessThan("small")`
        margin: 1rem;
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
    margin: 2rem 0;
    grid-template-columns: repeat(3 ,1fr);
    display: grid;
    grid-gap: 70px;  

    ${media.lessThan("medium")`
        grid-template-columns: repeat(2 ,1fr);
    `}

    ${media.lessThan("small")`
        grid-template-columns: auto;
    `}
`

export const ImagePost = styled(Img)`
    border-top-right-radius: 15px;
    max-height: 13rem;
`

export const LinkPost = styled(Link)``

export const TitlePost = styled.h1`
    padding: 15px 0 10px;
    color: #000;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.3;
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
    cursor: pointer;
    transition-duration: 0.4s;

    :hover {
        color: #fff;
        background-color: #37AA53;
        border-color: #37AA53;
    }
`

export const DivRight = styled.div`
    text-align: right;
`

export const ButtonBlog = styled.button`
    color:  #37AA53;
    color: #fff;
    background-color:  #37AA53;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    border: 1px solid transparent;
    padding: .4rem 1.2rem;
    line-height: 1.7;
    border-radius: .25rem;
`