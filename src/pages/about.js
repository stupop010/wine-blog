import React from "react"
import Loadable from "@loadable/component"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const LoadableAbout = Loadable(() => import("../components/about/about"))

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <LoadableAbout />
  </Layout>
)

export default SecondPage
