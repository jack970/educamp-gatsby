import React from 'react'
import * as S from './styled'
import { useStaticQuery, graphql } from 'gatsby'
import { kebabCase } from 'lodash'

const Footer = () => {

    const data = useStaticQuery(graphql`
        query FooterLinks {
            site {
                siteMetadata {
                    menuTop {
                        label
                        
                        subMenu {
                            subLabel
                        }
                    }
                }
            }
        }
    
    `)

    const footerlinks = data.site.siteMetadata.menuTop
    const footersliced = footerlinks.slice(2,4)
    return(
        <S.LayoutWrapper>
            <S.FooterContainer>
                {footersliced.map((title, id) =>{
                    const submenusliced = title.subMenu.slice(0,6)

                    return(
                        <S.FooterSolucoes key={id}>
                        <S.MenuTitle>{title.label}</S.MenuTitle>
                        <S.MenuWrapper>
                            <S.MenuUl>
                                {submenusliced.map((submenu, id) =>
                                    <S.MenuList key={id}>
                                        <S.MenuLink to={`/${kebabCase(submenu.subLabel)}`}>{submenu.subLabel}</S.MenuLink>
                                    </S.MenuList>  
                                )}
                            </S.MenuUl>
                        </S.MenuWrapper>
                    </S.FooterSolucoes>

                    )
                    })}
            </S.FooterContainer>
        </S.LayoutWrapper>
    )
}

export default Footer