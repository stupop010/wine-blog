import React from "react"
import PropTypes from "prop-types"

import PaginationLink from "./paginationLink"
import PaginationItem from "./paginationItem"
import { Pagination } from "./pagination.styles"

const PaginationList = ({ numPages, currentPage, slug }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const previousPage =
    currentPage - 1 === 1 ? `/${slug}` : `/${slug}/${currentPage - 1}`
  const nextPage = `/${slug}/${currentPage + 1}`

  return (
    <Pagination>
      <ul>
        {isFirst ? (
          <PaginationItem disabled>
            <PaginationLink previous href={`/${slug}`} />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationLink previous href={previousPage} />
          </PaginationItem>
        )}

        {Array.from({ length: numPages }, (_, i) =>
          currentPage === i + 1 ? (
            <PaginationItem active key={`page-number${i + 1}`}>
              <PaginationLink
                href={`/${i === 0 ? slug : `${slug}/` + (i + 1)}`}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={`page-number${i + 1}`}>
              <PaginationLink
                href={`/${i === 0 ? slug : `${slug}/` + (i + 1)}`}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {isLast ? (
          <PaginationItem disabled>
            <PaginationLink next href={nextPage} />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationLink next href={nextPage} />
          </PaginationItem>
        )}
      </ul>
    </Pagination>
  )
}

PaginationList.propTypes = {
  numPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
}

export default PaginationList
