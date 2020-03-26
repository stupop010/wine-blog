import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import SocialBar from "../components/socialBar/socialBar"
import { BlogComponent, Link, AuthorBar } from "./blog-post.styles"

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      slug
      createdAt(formatString: "MMMM, Do, YYYY")
      author
      title
      body {
        json
      }
      blogImage {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

const options = {
  renderNode: {
    "embedded-asset-block": node => {
      console.log(node)
      const src = node.data.target.fields.file["en-US"].url
      const alt = node.data.target.fields.title["en-US"]
      return <img src={src} alt={alt} />
    },
    hyperlink: (node, children) => {
      console.log(node)
      return <Link href={node.data.uri}>{children}</Link>
    },
  },
}

const BlogPosts = ({ data }) => {
  const { contentfulBlog } = data
  console.log(contentfulBlog)

  return (
    <Layout>
      <BlogComponent>
        <Img
          fluid={contentfulBlog.blogImage.fluid}
          style={{ height: "400px" }}
        />
        <h1>{contentfulBlog.title}</h1>
        <AuthorBar>
          <p>
            Posted by {contentfulBlog.author} on {contentfulBlog.createdAt}
          </p>
          <SocialBar />
        </AuthorBar>
        {documentToReactComponents(contentfulBlog.body.json, options)}
      </BlogComponent>
    </Layout>
  )
}

export default BlogPosts
