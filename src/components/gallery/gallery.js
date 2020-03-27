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
          <Image key={asset.id} onClick={() => toggleModal(index)}>
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

// import React from "react"
// import Img from "gatsby-image"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   faPlus,
//   faChevronRight,
//   faChevronLeft,
// } from "@fortawesome/free-solid-svg-icons"

// import {
//   ModalContainer,
//   CloseBtn,
//   Chevron,
//   HeroSection,
//   Carousel,
//   PictureTitle,
// } from "./gallery.styles"

// const GalleryModal = ({
//   pictures,
//   open,
//   picIndex,
//   setPicIndex,
//   toggleModal,
// }) => {
//   const closeModal = () => {
//     setPicIndex(null)
//     toggleModal()
//   }

//   const toggleImgLeft = () => {
//     if (picIndex === 0) return setPicIndex(pictures.length - 1)
//     setPicIndex(picIndex - 1)
//   }

//   const toggleImgRight = () => {
//     if (picIndex === pictures.length - 1) return setPicIndex(0)
//     setPicIndex(picIndex + 1)
//   }

//   return (
//     <ModalContainer open={open}>
//       {open && (
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <CloseBtn>
//             <FontAwesomeIcon icon={faPlus} size="2x" onClick={closeModal} />
//           </CloseBtn>

//           <HeroSection>
//             <Chevron>
//               <FontAwesomeIcon
//                 icon={faChevronLeft}
//                 size="3x"
//                 onClick={toggleImgLeft}
//               />
//             </Chevron>
//             <div>
//               <Img
//                 fluid={pictures[picIndex].fluid}
//                 style={{ height: "400px", width: "700px" }}
//                 imgStyle={{ objectFit: "contain" }}
//               />
//             </div>
//             <Chevron>
//               <FontAwesomeIcon
//                 icon={faChevronRight}
//                 size="3x"
//                 onClick={toggleImgRight}
//               />
//             </Chevron>
//           </HeroSection>
//           <PictureTitle>{pictures[picIndex].title}</PictureTitle>
//           <Carousel>
//             {console.log(pictures[0])}
//             <div>
//               <Img
//                 fluid={
//                   picIndex !== 0
//                     ? pictures[picIndex - 1].fluid
//                     : pictures[pictures.length - 1].fluid
//                 }
//                 style={{ height: "170px", width: "200px" }}
//               />
//             </div>
//             <div>
//               <Img
//                 fluid={pictures[picIndex].fluid}
//                 style={{ height: "170px", width: "200px" }}
//               />
//             </div>
//             <div>
//               <Img
//                 fluid={
//                   picIndex !== pictures.length - 1
//                     ? pictures[picIndex + 1].fluid
//                     : pictures[0].fluid
//                 }
//                 style={{ height: "170px", width: "200px" }}
//               />
//             </div>
//           </Carousel>
//         </div>
//       )}
//     </ModalContainer>
//   )
// }

// export default GalleryModal
