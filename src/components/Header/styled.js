import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import media from 'styled-media-query'

export const BackgroundBarWrapper = styled.div`
    background: linear-gradient(345deg,#31363D 0%,#177330 70%) no-repeat;
    
    ::after {
        content: '';
        position: absolute;
        width: 200%;
        height: ${props => props.theme.altura}rem;
        left: calc(-250px + 8vw);
        top: 0;
        border-radius: 30px;
        -webkit-transform: skewX(45deg);
        -ms-transform: skewX(45deg);
        transform: skewX(45deg);
        z-index: -1;
        background: #7B4630;
    }
`

export const LogoLink = styled(Link)``

export const NavBarFlex = styled.div`
    position: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 3rem;

    ${media.lessThan("large")`
        justify-content: space-around;
        padding-bottom: 1rem;
    `}
`

export const NavBarLogo = styled(Img)`
    width: 12rem;
    height: 100%;
    margin: 2rem 6rem 0 6rem;

    img {
        filter: drop-shadow(2px 1px 1px #fff);
      }

    ${media.lessThan("large")`
        margin:2rem 0;
    
    `}
`

export const NavBarContent = styled.div`
    position: inherit;
    text-align: center;
    color: #fff;
    z-index: 9;

    h1 {
        font-size: 3rem;
        font-weight: 600;
        margin-bottom: 1rem;
        font-family: font-family: Exo\ 2,Encode Sans Semi Expanded,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    }

    h2 {
        font-weight: 400;
    }

    p {
        margin: 0 auto 2rem auto;
        max-width: 65ch;
        color: #A0A7B0;
        padding-bottom: 2rem;
    }

`

export const DivNavBar = styled.div``

export const UlNavBar = styled.ul`
    text-align: center;

    ${media.lessThan("large")`
        display: none;
    
    `}

`

export const DropdownMenu = styled.ul`
    position: absolute;
    float: left;
    min-width: 10rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    z-index: 99;
    font-size: .8rem;
    color: #31363d;
    display: none;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.05);
    border-radius: .25rem;
    line-height: 2.2rem;
    box-shadow: 2px 1px 11px #1f1515;
    -webkit-box-shadow: 2px 1px 11px #1f1515;
    -moz-box-shadow: 2px 1px 11px #1f1515
`

export const LiNavBar = styled.li`
    padding: 1rem;
    display: inline-block;

    &:hover ${DropdownMenu} {
            display:block;
    }

`

export const LinkcomSubmenu = styled.p`
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    color: #fff;
    ::after {
        color: #fff;
        display: inline-block;
        margin-left: .255em;
        vertical-align: .255em;
        content: "";
        border-top: .3em solid;
        border-right: .3em solid transparent;
        border-bottom: 0;
        border-left: .3em solid transparent;
    }
`

export const LinksNavBar = styled(Link)`
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    color: #fff;
`

export const DropdownList = styled.li`
    font-weight: 400;
    color: #31363d;
    text-align: inherit;
    white-space: normal;
    background-color: transparent;
    border: 0;
    padding: .25rem 1.5rem;
    font-size: .9rem;
    border-bottom: 1px solid rgb(55 170 83);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgba(0, 0, 0, 50%);
`

export const DropdownLink = styled(Link)`
    max-width: 10rem;
    display:block;
    color: inherit;
    font-weight: 400;
`

export const SearchWrapper = styled.div`
    padding: .5rem .9rem;
    font-size: .72rem;
    line-height: 1.5;
    border-radius: .2rem;

    ${media.lessThan("large")`
    display: none;

`}
`

export const SearchToggle = styled.button`
    color: #fff;
    background-color: transparent;
    border-color: transparent;
    color: currentColor;
    cursor: pointer;

    svg {
        width: 20px;
        height: 20px;
    }
`

export const SearchCollapse = styled.div`
    display: ${props => props.showSearch ? 'block' : 'none'};
    position: absolute;
    width: 100%;
    left: 0;
`

export const SearchContainer = styled.div`
    padding: 2.5rem;
    margin: auto;
    position: absolute;
    width: 100%;
    left: 0;
`
