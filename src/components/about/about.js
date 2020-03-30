import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"

import { AboutContainer } from "./about.styles"

const About = () => {
  const { contentfulAboutInfo } = useStaticQuery(graphql`
    query {
      contentfulAboutInfo {
        description {
          description
        }
        title
        aboutPicture {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)

  const { title, description, aboutPicture } = contentfulAboutInfo

  return (
    <AboutContainer>
      <motion.div
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{title}</h1>
        <p>{description.description}</p>
      </motion.div>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Img fluid={aboutPicture.fluid} style={{ width: "100%" }} />
      </motion.div>
    </AboutContainer>
  )
}

export default About
