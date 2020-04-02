import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery/gallery"

const GalleryTemplate = ({ data, pageContext }) => {
  const { numPages, currentPage } = pageContext

  const pictures = data.allContentfulAsset.edges
  return (
    <Layout>
      <SEO title="Gallery" />
      <Gallery
        pictures={pictures}
        numPages={numPages}
        currentPage={currentPage}
      />
    </Layout>
  )
}

export const ImageListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
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
