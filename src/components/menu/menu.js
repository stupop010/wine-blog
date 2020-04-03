import React, { useContext } from "react"
import { Link } from "gatsby"

import ToggleBurger from "../../context"

import { MenuContainer } from "./menu.styles"

const Menu = () => {
  const { open } = useContext(ToggleBurger)

  return (
    <MenuContainer open={open}>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/blogs">blog</Link>
          </li>
          <li>
            <Link to="/gallery">gallery</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </MenuContainer>
  )
}

export default Menu
