/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const galleryImgsTemplate = path.resolve(`src/templates/gallery.js`)
  const blogListTemplate = path.resolve(`src/templates/blog-list.js`)

  // Creating blog page
  const blogPages = await graphql(`
    query contentfulBlog {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  blogPages.data.allContentfulBlog.edges.map(({ node }) => {
    const { slug } = node

    createPage({
      path: `/blog/${slug}`,
      component: blogPostTemplate,
      context: { slug },
    })
  })

  // Creating Blog list Pagination
  const blogPagination = await graphql(`
    query {
      allContentfulBlog(limit: 1000) {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  const blogList = blogPagination.data.allContentfulBlog.edges
  const blogsPerPage = 10
  const numBlogPages = Math.ceil(blogList.length / blogsPerPage)
  Array.from({ length: numBlogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numBlogPages,
        currentPage: i + 1,
      },
    })
  })

  // Creating Gallery Pagination
  const galleryImgs = await graphql(`
    query {
      allContentfulAsset(limit: 1000) {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  const images = galleryImgs.data.allContentfulAsset.edges
  const imgPerPage = 20
  const numPages = Math.ceil(images.length / imgPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    console.log(i, "page")
    createPage({
      path: i === 0 ? `/gallery` : `/gallery/${i + 1}`,
      component: galleryImgsTemplate,
      context: {
        limit: imgPerPage,
        skip: i * imgPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
