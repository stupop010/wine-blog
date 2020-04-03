import React, { useContext } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import useWindowDimensions from "../../hooks/useWindowDimensions"
import HamBurger from "../hamBurger/hamBurger"
import SocialBar from "../socialBar/socialBar"
import ToggleBurger from "../../context"

import { NavBarContainer, List, Search, SearchForm } from "./navbar.styles"

const NavBar = () => {
  const { open, toggleBurger } = useContext(ToggleBurger)
  const { width } = useWindowDimensions()

  return (
    <>
      {width > 768 ? (
        <NavBarContainer>
          <List>
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
      ) : (
        <HamBurger toggleBurger={toggleBurger} open={open} />
      )}
    </>
  )
}

export default NavBar
