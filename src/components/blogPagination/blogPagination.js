import React from "react"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import PaginationList from "../paginationList/paginationList"

import { BlogPagContainer, Blog, BlogContent } from "./blogPagination.styles"

const BlogPagination = ({ blogs, numBlogPages, currentPage }) => {
  const blogList = blogs.map(({ node }) => {
    return (
      <Blog>
        <Img
          fluid={node.blogImage.fluid}
          style={{ height: "100%", width: "30%", alignSelf: "center" }}
        />
        <BlogContent>
          <h2>{node.title}</h2>
          {documentToReactComponents(node.blogSummary.json)}
          <div>
            Posted by <span>{node.author}</span> on
            <span> {node.createdAt}</span>
          </div>
        </BlogContent>
      </Blog>
    )
  })

  return (
    <BlogPagContainer>
      <h1>Wine Blogs</h1>
      {blogList}
      <PaginationList
        numPages={numBlogPages}
        currentPage={currentPage}
        slug="blogs"
      />
    </BlogPagContainer>
  )
}

export default BlogPagination
