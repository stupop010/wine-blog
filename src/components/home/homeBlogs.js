import React from "react"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useStaticQuery, graphql } from "gatsby"
import { HomeHeadBlog } from "./home.styles"

const HomeBlogs = () => {
  const { allContentfulBlog } = useStaticQuery(graphql`
    query MyQuery {
      allContentfulBlog(limit: 7, sort: { fields: date, order: DESC }) {
        edges {
          node {
            author
            date(formatString: "MMMM, Do, YYYY")
            title
            createdAt(formatString: "MMMM, Do, YYYY")
            updatedAt(fromNow: true)
            blogImage {
              fluid(quality: 100) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            blogSummary {
              json
            }
          }
        }
      }
    }
  `)

  const { node: firstBlog } = allContentfulBlog.edges[0]

  const blogList = allContentfulBlog.edges.slice(1)

  const data = blogList.map(({ node }) => {
    return <h2>{node.title}</h2>
    return documentToReactComponents(node.body.json)
  })

  return (
    <div>
      <HomeHeadBlog>
        <h2>{firstBlog.title}</h2>
        <Img
          fluid={firstBlog.blogImage.fluid}
          style={{ height: "300px" }}
          imgStyle={{ objectFit: "cover" }}
        />
        <p>
          Posted by <span>{firstBlog.author}</span> on
          <span> {firstBlog.createdAt}</span>
        </p>

        <div>{documentToReactComponents(firstBlog.blogSummary.json)}</div>
        <button>Read More</button>
      </HomeHeadBlog>
    </div>
  )
}

export default HomeBlogs
