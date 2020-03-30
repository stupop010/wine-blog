import PropTypes from "prop-types"
import React from "react"

import NavBar from "../navBar/navBar"

import { HeaderContainer, Title, TitleSpan } from "./header.styles"

const Header = () => (
  <header>
    <HeaderContainer>
      <div>
        <Title>
          Wine <TitleSpan>Blog</TitleSpan>
        </Title>
      </div>
    </HeaderContainer>
    <NavBar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
