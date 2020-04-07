import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Contact from "../components/contact/contact"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Contact />
    </Layout>
  )
}

export default ContactPage
