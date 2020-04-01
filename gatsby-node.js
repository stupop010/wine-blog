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

  const blogPages = await graphql(
    `
      query contentfulBlog {
        allContentfulBlog {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

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

  blogPages.data.allContentfulBlog.edges.map(({ node }) => {
    const { slug } = node

    createPage({
      path: `/blog/${slug}`,
      component: blogPostTemplate,
      context: { slug },
    })
  })
}
