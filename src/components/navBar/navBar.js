import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import {
  NavBarContainer,
  List,
  Search,
  SocialList,
  SearchForm,
} from "./navbar.styles"

const NavBar = () => {
  return (
    <NavBarContainer>
      <List>
        <li>
          <Link>home</Link>
        </li>
        <li>
          <Link>blog</Link>
        </li>
        <li>
          <Link>gallery</Link>
        </li>
        <li>
          <Link>about</Link>
        </li>
        <li>
          <Link>contact</Link>
        </li>
      </List>

      <Search>
        <div>
          <SocialList>
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
            <li>
              <FontAwesomeIcon icon={faPinterest} />
            </li>
          </SocialList>
        </div>

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
