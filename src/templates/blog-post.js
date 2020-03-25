import React from "react"

import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      slug
      createdAt
      author
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
      return <a href={node.data.uri}>{children}</a>
    },
  },
}

const BlogPosts = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        {documentToReactComponents(data.contentfulBlog.body.json, options)}
      </div>
    </Layout>
  )
}

export default BlogPosts
