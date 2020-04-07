import React from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlus,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"
import {
  ModalContainer,
  CloseBtn,
  Chevron,
  HeroSection,
  Carousel,
  PictureTitle,
} from "./gallery.styles"

import useWindowDimensions from "../../hooks/useWindowDimensions"

const GalleryModal = ({
  pictures,
  open,
  picIndex,
  setPicIndex,
  toggleModal,
}) => {
  const { width } = useWindowDimensions()

  const closeModal = () => {
    setPicIndex(null)
    toggleModal()
  }

  const toggleImgLeft = () => {
    if (picIndex === 0) return setPicIndex(pictures.length - 1)
    setPicIndex(picIndex - 1)
  }

  const toggleImgRight = () => {
    if (picIndex === pictures.length - 1) return setPicIndex(0)
    setPicIndex(picIndex + 1)
  }

  return (
    <ModalContainer
      open={open}
      initial={{ opacity: 0 }}
      animate={{ opacity: open ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {open && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <CloseBtn>
            <FontAwesomeIcon icon={faPlus} size="2x" onClick={closeModal} />
          </CloseBtn>

          <HeroSection>
            <Chevron>
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="3x"
                onClick={toggleImgLeft}
              />
            </Chevron>
            <div>
              <Img
                fluid={pictures[picIndex].node.fluid}
                style={{
                  height: "400px",
                  width: width > 800 ? "700px" : "350px",
                }}
                imgStyle={{ objectFit: "contain" }}
              />
            </div>
            <Chevron>
              <FontAwesomeIcon
                icon={faChevronRight}
                size="3x"
                onClick={toggleImgRight}
              />
            </Chevron>
          </HeroSection>
          <PictureTitle>{pictures[picIndex].title}</PictureTitle>
          <Carousel>
            <div onClick={() => setPicIndex(picIndex - 1)}>
              <Img
                fluid={
                  picIndex !== 0
                    ? pictures[picIndex - 1].node.fluid
                    : pictures[pictures.length - 1].node.fluid
                }
                style={{
                  height: "170px",
                  width: width > 800 ? "200px" : "200px",
                }}
              />
            </div>
            <div onClick={() => setPicIndex(picIndex)}>
              <Img
                fluid={pictures[picIndex].node.fluid}
                style={{ height: "170px", width: "200px" }}
              />
            </div>
            <div onClick={() => setPicIndex(picIndex + 1)}>
              <Img
                fluid={
                  picIndex !== pictures.length - 1
                    ? pictures[picIndex + 1].node.fluid
                    : pictures[0].node.fluid
                }
                style={{ height: "170px", width: "200px" }}
              />
            </div>
          </Carousel>
        </div>
      )}
    </ModalContainer>
  )
}

export default GalleryModal
