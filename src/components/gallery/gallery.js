import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import GalleryModal from "./galleryModal"

import { GalleryContainer, Image } from "./gallery.styles"

const Gallery = () => {
  const [picIndex, setPicIndex] = useState(null)
  const [open, setOpen] = useState(false)

  const { allContentfulAsset } = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        nodes {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
          id
          title
        }
      }
    }
  `)

  const toggleModal = index => {
    setPicIndex(index)
    setOpen(!open)
  }

  return (
    <>
      <GalleryModal
        pictures={allContentfulAsset.nodes}
        open={open}
        picIndex={picIndex}
        toggleModal={toggleModal}
        setPicIndex={setPicIndex}
      />
      <GalleryContainer>
        {allContentfulAsset.nodes.map((asset, index) => (
          <Image
            key={asset.id}
            onClick={() => toggleModal(index)}
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: (1 * index) / 15 }}
          >
            <Img
              fluid={asset.fluid}
              imgStyle={{ objectFit: "cover" }}
              style={{ width: "200px", height: "200px" }}
            />
          </Image>
        ))}
      </GalleryContainer>
    </>
  )
}

export default Gallery
