import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import HomeBlogs from "./homeBlogs"

import { HomeContainer, HomeMainSection } from "./home.styles"

const Home = () => {
  const { contentfulHeroPic } = useStaticQuery(graphql`
    query HeroPic {
      contentfulHeroPic {
        picture {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)

  return (
    <HomeContainer>
      <div>
        <Img
          fluid={contentfulHeroPic.picture.fluid}
          imgStyle={{ objectFit: "cover" }}
          style={{ height: "500px" }}
        />
      </div>
      <HomeMainSection>
        <HomeBlogs />
        <div style={{ height: "700px", color: "blue" }}>grid two</div>
      </HomeMainSection>
    </HomeContainer>
  )
}

export default Home
