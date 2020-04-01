import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery/gallery"

const GalleryPage = () => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <Gallery />
    </Layout>
  )
}

export default GalleryPage
