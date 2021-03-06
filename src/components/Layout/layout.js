/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from '../../Styles/global'
import * as S from './styled'

const Layout = ({ children }) => {

  return (
    <S.LayoutWrapper>
        <GlobalStyles />
        <S.LayoutMain> {children} </S.LayoutMain>
    </ S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
