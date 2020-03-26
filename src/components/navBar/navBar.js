import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import SocialBar from "../socialBar/socialBar"
import { NavBarContainer, List, Search, SearchForm } from "./navbar.styles"

const NavBar = () => {
  return (
    <NavBarContainer>
      <List>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
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
      </List>

      <Search>
        <SocialBar />
        <SearchForm>
          <input type="text" placeholder="Search" />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </SearchForm>
      </Search>
    </NavBarContainer>
  )
}

export default NavBar
