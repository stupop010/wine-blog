import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import HomeBlogs from "./homeBlogs"
import Archives from "../archives/archives"
import NewsLetter from "../newsLetter/newsLetter"

import {
  HomeContainer,
  HomeMainSection,
  HomeHero,
  RightSection,
} from "./home.styles"

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
      <HomeHero>
        <Img
          fluid={contentfulHeroPic.picture.fluid}
          imgStyle={{ objectFit: "cover" }}
          style={{ height: "500px" }}
        />
      </HomeHero>
      <HomeMainSection>
        <HomeBlogs />
        <RightSection>
          <Archives />
          <NewsLetter />
        </RightSection>
      </HomeMainSection>
    </HomeContainer>
  )
}

export default Home
