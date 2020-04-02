import React from "react"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useStaticQuery, graphql, Link } from "gatsby"

import SocialBar from "../socialBar/socialBar"

import { HomeHeadBlog, HomeBlogList, CreatedBy } from "./home.styles"

const HomeBlogs = () => {
  const { allContentfulBlog } = useStaticQuery(graphql`
    query MyQuery {
      allContentfulBlog(limit: 7, sort: { fields: date, order: DESC }) {
        edges {
          node {
            author
            title
            createdAt(formatString: "MMMM, Do, YYYY")
            slug
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
    return (
      <div>
        <Link to={`/blog/${node.slug}`}>
          <Img
            fluid={node.blogImage.fluid}
            style={{ height: "220px", width: "100%", borderRadius: "20px" }}
          />
          <h3>{node.title}</h3>
        </Link>
        {documentToReactComponents(node.blogSummary.json)}
        <CreatedBy>
          Posted by <span>{node.author}</span> on
          <span> {node.createdAt}</span>
        </CreatedBy>
      </div>
    )
  })

  return (
    <div>
      <HomeHeadBlog>
        <h2>{firstBlog.title}</h2>
        <Img fluid={firstBlog.blogImage.fluid} style={{ height: "300px" }} />
        <CreatedBy>
          Posted by <span>{firstBlog.author}</span> on
          <span> {firstBlog.createdAt}</span>
        </CreatedBy>

        <div>{documentToReactComponents(firstBlog.blogSummary.json)}</div>

        <button>
          <Link to={`/blog/${firstBlog.slug}`}>Read More</Link>
        </button>

        <div>
          Share: <SocialBar />
        </div>
      </HomeHeadBlog>
      <HomeBlogList>{data}</HomeBlogList>
    </div>
  )
}

export default HomeBlogs
