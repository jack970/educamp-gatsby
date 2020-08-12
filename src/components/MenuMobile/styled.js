import styled from 'styled-components'
import { Link } from 'gatsby'
import media from 'styled-media-query'

export const LayoutWrapper = styled.div`
    ${media.greaterThan("large")`
        display: none;
    
    `}
`

export const NavBarCollapse = styled.div`
    visibility: ${({open}) => open ? 'visible' : 'hidden'};
    content: "";
    position: absolute;
    width: 100%;
    background: linear-gradient(140deg,#31363D 0%,#177330 100%) no-repeat;
    z-index: 10;
    padding: 15px;
    transition: all 1.2s ease;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(200%)'};

    ${media.greaterThan("large")`
        display: none;
        visibility: hidden;
    `}

`

export const Button = styled.button`
    color: #fff;
    background-color: transparent;
    border-color: transparent;
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    border: 1px solid transparent;
    border-radius: .25rem;
    cursor: pointer;

    border-color: hsla(0,0%,100%,.1);
    border-top-color: rgb(255 255 255 / 48%);
    border-right-color: rgb(255 255 255 / 48%);
    border-bottom-color: rgb(255 255 255 / 48%);
    border-left-color: rgb(255 255 255 / 48%);

    span {
        fill: #fff;
    }

`

export const MenuPrincipal = styled.ul`
    font-weight: 500;
    letter-spacing: .01em;
`

export const MenuItem = styled.li`
    padding: .8em 0;
    border-bottom: 1px solid #fff;

   
`

export const MenuItemLink = styled(Link)`
    color: #fff;
    display: block;
    
`

export const SubMenuItemLink = styled(Link)`
    color: #333;
    display: block;
    padding: .8em 0;
`

export const DropdownMenu = styled.ul`
    display: none;
    top: 100%;
    z-index: 1000;
    min-width: 10rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    font-size: .8rem;
    color: #31363d;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.05);
    border-radius: .25rem;

    
`

export const LinkcomSubmenu = styled.p`
    cursor: pointer;
    font-weight: 500;
    padding: .8em 0;
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


export const ListDropdown = styled.li`
        display: block;
        width: 100%;
        padding: .25rem 1.5rem;
        clear: both;
        font-weight: 400;
        color: #31363d;
        background-color: transparent;
        border: 0;
        border-bottom: 1px solid rgba(0,0,0,.05);
        white-space: nowrap;

`