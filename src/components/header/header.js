import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-center: center;
  padding: 1.5rem 0;
`
const Title = styled.h1`
  font-size: 2.5rem;
  font-family: "PT Sans", sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryColor};
`

const TitleSpan = styled.span`
  font-family: "Liu Jian Mao Cao", cursive;
  display: block;
  padding-left: 4rem;
  margin: -0.8rem;
  font-size: 2rem;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <div>
      <Title>
        Wine <TitleSpan>Blog</TitleSpan>
      </Title>
    </div>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
