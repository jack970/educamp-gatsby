import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export const LayoutWrapper = styled.div`
    display: flex;
    margin-left: auto;
    margin-top: 4rem;
    margin-right: auto;
    justify-content: space-around;
    align-items: center;

    ${media.lessThan("medium")`
        display: contents;
    `}
`

export const ImageLeft = styled(Img)`
    width: 32rem;
    box-shadow: 2px 1px 11px #ccc;
    -webkit-box-shadow: 2px 1px 11px #ccc;
    -moz-box-shadow: 2px 1px 11px #ccc;
    border-radius: 4rem;

    ${media.lessThan("medium")`
        max-width: 20rem;
        margin: 3rem auto 1rem auto;
    `}
`

export const Content = styled.div`
    display: block;
    text-align: inherit;
    
    line-height: 1.15;

    ${media.lessThan("medium")`
        margin-top: 3rem;
        text-align: center;
        `}
    }

    h2 {

        font-weight: 300;
        font-size: 48px;
        letter-spacing: .02em;
        color: #7E858F;

        ${media.lessThan("medium")`
        font-size: 30px;
        `}
    }

    p {
        max-width: 20rem;
        line-height: 1.7;
        margin: 1rem 3rem;

        ${media.lessThan("medium")`
        margin: auto;
        `}
    }
`

export const ImageLink = styled(Link)``