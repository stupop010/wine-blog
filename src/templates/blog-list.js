import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import BlogPagination from "../components/blogPagination/blogPagination"

const BlogListTemplate = ({ data, pageContext }) => {
  const { numBlogPages, currentPage } = pageContext
  const blogs = data.allContentfulBlog.edges

  return (
    <Layout>
      <SEO title="Gallery" />
      <BlogPagination
        blogs={blogs}
        numBlogPages={numBlogPages}
        currentPage={currentPage}
      />
    </Layout>
  )
}

export const BlogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allContentfulBlog(limit: $limit, skip: $skip) {
      edges {
        node {
          title
          author
          blogSummary {
            json
          }
          createdAt(formatString: "MMMM, Do, YYYY")
          slug
          blogImage {
            fluid(quality: 100) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default BlogListTemplate
