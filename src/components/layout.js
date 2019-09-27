/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// Global Styles & Theme
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/styles/global"
import {theme}  from "../components/styles/theme"
// Hooks
import useMedia from "../hooks/useMedia"
// Components
import Header from "./header"
import Footer from "./footer"
import MobileMenu from "./mobileMenu"

const Layout = ({ children }) => {
  const isMobile = useMedia("(max-width:560px)")
  return (
    <ThemeProvider theme={theme}>
      <>
      <div style={{display:'flex',flexDirection:'column', minHeight:'100vh'}}>
        <GlobalStyles />
            <MobileMenu />
          <main style={{ textAlign: "center",flex:'1' }}>{children}</main>
        <Footer />
        </div>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
