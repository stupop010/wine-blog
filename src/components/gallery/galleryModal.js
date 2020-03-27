import React from "react"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import { ModalContainer, Close } from "./gallery.styles"

const GalleryModal = ({
  pictures,
  open,
  picIndex,
  setPicIndex,
  toggleModal,
}) => {
  const closeModal = () => {
    setPicIndex(null)
    toggleModal()
  }

  return (
    <ModalContainer open={open}>
      {open && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Close>
            <FontAwesomeIcon icon={faPlus} size="2x" onClick={closeModal} />
          </Close>
          <div>
            {/* <Img
              fluid={pictures[picIndex].fluid}
              style={{ height: "450px", width: "600px", margin: "auto" }}
              imgStyle={{ objectFit: "contain" }}
            /> */}
            <BackgroundImage
              Tag="section"
              fluid={pictures[picIndex].fluid}
              backgroundColor={`#040e18`}
            >
              <h2>gatsby-background-image</h2>
            </BackgroundImage>
            <div>hello</div>
            <div>hello</div>
          </div>
          <div>
            <div>
              <Img
                fluid={
                  picIndex !== 0
                    ? pictures[picIndex - 1].fluid
                    : pictures[pictures.length - 1].fluid
                }
              />
            </div>
            <div>
              <Img fluid={pictures[picIndex].fluid} />
            </div>
            <div>
              <Img fluid={pictures[picIndex + 1].fluid} />
            </div>
          </div>
        </div>
      )}
    </ModalContainer>
  )
}

export default GalleryModal
