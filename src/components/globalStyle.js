import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
  },
  ul {
    margin: 0;
  },
  a { 
    text-decoration: none;
    color: inherit;
  }
`

export default () => (
  <>
    <GlobalStyle theme="purple" />
  </>
)
