import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Header from "../header/header"
import GlobalStyle from "../globalStyle"
import theme from "../themeStyle"
import Menu from "../menu/menu"
import ToggleBurger from "../../context"

import { Container } from "./layout.styles"
import "../index.css"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  const toggleBurger = () => {
    setOpen(!open)
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToggleBurger.Provider value={{ open, toggleBurger }}>
        <Container open={open}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Menu />
          <main>{children}</main>
          <footer>© {new Date().getFullYear()}, Build by Stuart Doney</footer>
        </Container>
      </ToggleBurger.Provider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
