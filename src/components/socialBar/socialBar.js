import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"

import { SocialContainer } from "./socialBar.styles"

const SocialBar = () => (
  <SocialContainer>
    <ul>
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
    </ul>
  </SocialContainer>
)

export default SocialBar
