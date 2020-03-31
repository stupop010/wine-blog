import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import useForm from "../../hooks/useForm"

import { ContactContainer } from "./contact.styles"

const Contact = () => {
  const { inputs, handleSubmit, handleInputChange } = useForm({
    name: "",
    email: "",
    message: "",
  })

  // const { file } = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "contact_pic.jpg" }) {
  //       childImageSharp {
  //         fluid(quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <BackgroundImage
      Tag="section"
      // fluid={file.childImageSharp.fluid}
      backgroundColor={`#040e18`}
      style={{ height: "100%" }}
    >
      <ContactContainer>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={inputs.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={inputs.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Message..."
              name="message"
              value={inputs.message}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">send</button>
        </form>
      </ContactContainer>
    </BackgroundImage>
  )
}

export default Contact
