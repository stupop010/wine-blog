import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Home from "../components/home/home"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default HomePage
