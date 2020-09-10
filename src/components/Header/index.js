import React, { useState } from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Particles from 'react-particles-js'
import * as S from './styled'
import {kebabCase} from 'lodash'
import MenuMobile from '../MenuMobile'
import MenuBurguer from '../MenuMobile/MenuBuguer'
import Search from '../Search'
import {SearchIcon, XCircle} from '../SideBarBlog/Icon'

const Header = ({title, secondtitle, descricao, particulas, altura}) => {
    const data = useStaticQuery(graphql`
        query QueryMenuTop {
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
            file(relativePath: {eq: "logo-header.png"}) {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
        }
    `)
    const [showSearch, setShowSearch] = useState(false)
    const [mobile, setMobile] = useState(false)
    const Links = data.site.siteMetadata.menuTop
    const logo = data.file.childImageSharp.fluid

    return(
            <S.BackgroundBarWrapper 
                theme={{ altura: altura}}
                style={{ position: "relative" }}>
                 <Particles
                    style={{ position: "absolute", display: particulas}}
                    height="100%"
                    width="95%"
                    params={{
                        particles: {
                            color: {
                                value: "#333"
                            },
                            line_linked: {
                                color: {
                                    value: "#333"
                                }
                            },
                            number: {
                                value: 19
                            },
                            size: {
                                value: 2
                            }
                        }
                    }}
                />
                <S.NavBarFlex>
                    <S.LogoLink to='/'>
                        <S.NavBarLogo fluid={logo} />
                    </S.LogoLink>
                    <S.UlNavBar >
                        {
                            Links.map((link, id) => 
                            <S.LiNavBar key={id}>
                                {link.subMenu ? 
                                    (
                                        <>
                                            <S.LinkcomSubmenu> {link.label}</S.LinkcomSubmenu>
                                            <S.DropdownMenu>
                                                {link.subMenu.map((submenu, id)=> 
                                                    <S.DropdownList key={id}>
                                                        <S.DropdownLink to={`/${kebabCase(submenu.subLabel)}`}>{submenu.subLabel}</S.DropdownLink>
                                                    </S.DropdownList>
                                                )}
                                            </S.DropdownMenu>
                                        </>
                                    ) : (

                                        <S.LinksNavBar to={ link.label === 'Início' ? '/' : `/${kebabCase(link.label)}`
                                        }> {link.label} </S.LinksNavBar>
                                    )
                                }
                            </S.LiNavBar> 
                            )
                        }
                    </S.UlNavBar>

                    <S.SearchWrapper>
                        <S.SearchToggle onClick={() => setShowSearch(!showSearch)}>
                            {showSearch ? <XCircle /> : <SearchIcon />  }
                        </S.SearchToggle>
                        <S.SearchCollapse showSearch={showSearch}>
                            <S.SearchContainer>
                                <Search />
                            </S.SearchContainer>  
                        </S.SearchCollapse>
                    </S.SearchWrapper>

                    <MenuMobile open={mobile} setOpen={setMobile}/>
                </S.NavBarFlex>
                <MenuBurguer open={mobile} />
                <S.NavBarContent>
                    <h1>{title}</h1>
                    <h2>{secondtitle}</h2>
                    <p>{descricao}</p>
                </S.NavBarContent>
            </ S.BackgroundBarWrapper>
    )   
}

export default Header