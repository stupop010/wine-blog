import React, { lazy, Suspense } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery/gallery"

const ClientSideOnlyLazyGallery = React.lazy(() =>
  import("../components/gallery/gallery")
)

const GalleryTemplate = ({ data, pageContext }) => {
  console.log(window)
  const isSSR = typeof window === "undefined" || !window.document

  const { numPages, currentPage } = pageContext

  const pictures = data.allContentfulAsset.edges
  return (
    <Layout>
      <SEO title="Gallery" />
      {!isSSR && (
        <Suspense fallback={<div />}>
          <ClientSideOnlyLazyGallery
            pictures={pictures}
            numPages={numPages}
            currentPage={currentPage}
          />
        </Suspense>
      )}
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
