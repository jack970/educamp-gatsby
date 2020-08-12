import styled from 'styled-components'
import { Link } from 'gatsby'
import media from 'styled-media-query'

export const LayoutWrapper = styled.footer`
    background: linear-gradient(140deg,#31363D 0%,#177330 100%) no-repeat;
    padding: 70px 10rem 1rem;
    line-height: 1.7;

    ${media.lessThan("small")`
        padding: 2rem;
    `}
`

export const FooterContainer = styled.div`
    display: grid;
    grid-gap: 60px 20px;
    grid-template-columns: repeat(5,1fr);

    ${media.lessThan("small")`
        grid-template-columns: auto;
        grid-gap: 30px 20px;
    `}
`

export const FooterProdutos = styled.aside``

export const FooterSolucoes = styled.aside``

export const FooterEmpresa = styled.aside``

export const MenuTitle = styled.h1`
    color: #fff;
    font-size: 1.1rem;
    margin-bottom: .5rem;
    font-weight: 700;
    line-height: 1.3;
    
    ${media.lessThan("small")`
        font-size: 1.6rem;
    `}
`

export const MenuWrapper = styled.div``

export const MenuUl = styled.ul`
    margin-bottom: 1rem;
`

export const MenuList = styled.li``

export const MenuLink = styled(Link)`
    padding: 5px 0;
    display: block;
    color: hsla(0,0%,100%,.7);
    font-size: .8rem;

    ${media.lessThan("small")`
        font-size: 1rem;
    `}
`