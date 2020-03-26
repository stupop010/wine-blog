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

  const { data } = await graphql(
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

  data.allContentfulBlog.edges.map(({ node }) => {
    const { slug } = node

    createPage({
      path: `/blog/${slug}`,
      component: blogPostTemplate,
      context: { slug },
    })
  })
}
