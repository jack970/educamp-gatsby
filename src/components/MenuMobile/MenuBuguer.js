import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import * as S from './styled'
import {kebabCase} from 'lodash'
import Search from '../Search'

const MenuBuguer = ({ open }) => {

    const data = useStaticQuery(graphql`
        query QueryMenuMobile {
            site {
                siteMetadata {
                    menuTop {
                        label
                        linkLabel
                        subMenu {subLabel}
                    }
                }
            }
        }
        `)

    const handleClick = e => {

        e.preventDefault()
        if(e.currentTarget.lastChild.style.display === 'block') {
            e.currentTarget.lastChild.style.display = 'none'
        }
        else {
            e.currentTarget.lastChild.style.display = 'block'
        }
    }

    const menu = data.site.siteMetadata.menuTop
    return (
            <S.NavBarCollapse open={open}>
                <S.MenuPrincipal>
                    {menu.map((menuPrincipal, id) => 
                    <S.MenuItem key={id} onClick={(e) => handleClick(e)}>
                            {menuPrincipal.subMenu ? (
                                <S.LinkcomSubmenu>
                                        {menuPrincipal.label}
                                </S.LinkcomSubmenu>

                            ) : 
                               (
                            <S.MenuItemLink 
                                to={`/${kebabCase(menuPrincipal.label)}`}>
                                    {menuPrincipal.label}
                            </S.MenuItemLink>
                                   )
                            }
                            {menuPrincipal.subMenu ? (
                                <S.DropdownMenu >
                                    {menuPrincipal.subMenu.map((subLink, id) => 
                                        <S.ListDropdown key={id}>
                                            <S.SubMenuItemLink to={`${menuPrincipal.linkLabel}/${kebabCase(subLink.subLabel)}`}>
                                                {subLink.subLabel}
                                            </S.SubMenuItemLink>
                                        </S.ListDropdown>
                                        )}
                                </S.DropdownMenu>
                            ) : null}
                    </S.MenuItem>
                        )}
                    <Search />
                </S.MenuPrincipal>
            </S.NavBarCollapse>
    )
}

export default MenuBuguer