import React from "react"
import Img from "gatsby-image"

import { ModalContainer } from "./gallery.styles"

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
    <ModalContainer open={open} onClick={closeModal}>
      {open && (
        <div>
          <div>close</div>
          <div>
            <Img fluid={pictures[picIndex].fluid} />
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
