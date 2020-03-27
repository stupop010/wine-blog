import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"

import { Chevron } from "./gallery.styles"

const StyledBackgroundSection = ({
  fluid,
  className,
  toggleImgLeft,
  toggleImgRight,
}) => {
  return (
    <div>
      <BackgroundImage Tag="div" fluid={fluid} className={className}>
        <Chevron>
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="3x"
            onClick={toggleImgLeft}
          />
        </Chevron>
        <Chevron>
          <FontAwesomeIcon
            icon={faChevronRight}
            size="3x"
            onClick={toggleImgRight}
          />
        </Chevron>
      </BackgroundImage>
    </div>
  )
}

const StyledBackground = styled(StyledBackgroundSection)`
  margin: auto;
  width: 700px;
  height: 450px;
  background-size: contain;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default StyledBackground
