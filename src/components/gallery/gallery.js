import React, { useState } from "react"
import Img from "gatsby-image"

import PaginationList from "../paginationList/paginationList"
import GalleryModal from "./galleryModal"

import { GalleryContainer, Image } from "./gallery.styles"

const defaultProps = {
  pictures: [
    {
      node: {
        id: 0,
        fluid: {},
      },
    },
  ],
  numPages: 0,
  currentPage: 0,
}

const Gallery = ({ pictures, numPages, currentPage }) => {
  const [picIndex, setPicIndex] = useState(null)
  const [open, setOpen] = useState(false)

  const toggleModal = index => {
    setPicIndex(index)

    setOpen(!open)
  }

  if (!pictures.length > 0) return null

  return (
    <>
      <GalleryContainer>
        <GalleryModal
          pictures={pictures}
          open={open}
          picIndex={picIndex}
          toggleModal={toggleModal}
          setPicIndex={setPicIndex}
        />
        {pictures.map(({ node }, index) => (
          <Image
            key={node.id}
            onClick={() => toggleModal(index)}
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: (1 * index) / 5 }}
          >
            <Img
              fluid={node.fluid}
              imgStyle={{ objectFit: "cover" }}
              style={{ width: "200px", height: "200px" }}
            />
          </Image>
        ))}
      </GalleryContainer>
      <PaginationList
        slug="gallery"
        numPages={numPages}
        currentPage={currentPage}
      />
    </>
  )
}

Gallery.defaultProps = defaultProps

export default Gallery
