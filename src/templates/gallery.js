import React from "react"
import { graphql } from "gatsby"
import Loadable from "@loadable/component"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
// import Gallery from "../components/gallery/gallery"

const LoadableGallery = Loadable(() => import("../components/gallery/gallery"))

const GalleryTemplate = ({ data, pageContext }) => {
  const { numPages, currentPage } = pageContext

  const pictures = data.allContentfulAsset.edges
  return (
    <Layout>
      <SEO
        title={`Gallery ${currentPage === 1 ? "" : "| Page " + currentPage}`}
      />
      <LoadableGallery
        pictures={pictures}
        numPages={numPages}
        currentPage={currentPage}
      />
    </Layout>
  )
}

export const ImageListQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulAsset(limit: $limit, skip: $skip) {
      edges {
        node {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
          id
          title
        }
      }
    }
  }
`

export default GalleryTemplate
