import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { HomeContainer } from "./home.styles"

const Home = () => {
  const { contentfulAsset } = useStaticQuery(graphql`
    query HeroPic {
      contentfulAsset {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  `)

  return (
    <HomeContainer>
      <div>
        <Img
          fluid={contentfulAsset.fluid}
          imgStyle={{ objectFit: "cover" }}
          style={{ height: "500px" }}
        />
      </div>
    </HomeContainer>
  )
}

export default Home
