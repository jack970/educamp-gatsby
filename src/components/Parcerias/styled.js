import styled from 'styled-components'
import Img from 'gatsby-image'
import media from 'styled-media-query'

export const LayoutWrapper = styled.div`
    display: flex;
    background: #fff;
    -webkit-box-shadow: 0 15px 90px rgba(0,0,0,.2);
    box-shadow: 0 15px 90px rgba(0,0,0,.2);
    margin-top: 60px;
    margin-bottom: 60px;
    padding: 30px 0;
    justify-content: space-around;

    ${media.greaterThan("1876px")`
        padding: 2rem 28rem;
    
    `}

    ${media.lessThan("medium")`
        display: block;
    `}
`

export const Descricao = styled.div`
    width: 25rem;
    padding-left: 1.2rem;

    ${media.lessThan("medium")`
        padding: 0;
        margin: auto;
        width: auto;
    `}

    h1 {
        font-size: 1.65rem;
        font-weight: 700;

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

        ${media.lessThan("large")`
            padding: 1rem;
        `}
    }

    p {
        font-style: italic;
        line-height: 1.8rem;
        padding: 2rem;
        font-weight: 400;

        ${media.lessThan("large")`
            
        `}
    }
`

export const Clientes = styled.div`
    margin: 0 3rem;

    ${media.lessThan("small")`
        margin: auto;
    `}
`

export const ClienteUl = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;

    ${media.lessThan("large")`
        grid-template-columns: 1fr 1fr 1fr;
    `}

    ${media.lessThan("small")`
        grid-template-columns:  1fr 1fr;
    `}
`

export const ClienteLi = styled.li`
    transition: all .2s ease-in-out;
    margin: 0 2rem;
    filter: grayscale(100%);

    &:hover {
        filter: grayscale(0%);
    }
`

export const ClienteImg = styled(Img)`
    width: 4.6rem;
    margin: .9rem auto;
`