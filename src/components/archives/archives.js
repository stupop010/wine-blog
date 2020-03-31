import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"

import { ArchivesContainer } from "./archives.styles"

const Archives = () => {
  const { allContentfulBlog } = useStaticQuery(graphql`
    query {
      allContentfulBlog(filter: { archive: { in: true } }) {
        edges {
          node {
            title
            slug
            id
          }
        }
      }
    }
  `)

  const list = allContentfulBlog.edges.map(({ node }) => (
    <Link to={`/blog/${node.slug}`}>
      <li key={node.id}>
        <FontAwesomeIcon icon={faLongArrowAltRight} />
        {node.title}
      </li>
    </Link>
  ))

  return (
    <ArchivesContainer>
      <h3>Archives</h3>
      <ul>{list}</ul>
    </ArchivesContainer>
  )
}

export default Archives
