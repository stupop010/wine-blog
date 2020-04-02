import React from "react"
import PropTypes from "prop-types"

import PaginationLink from "./paginationLink"
import PaginationItem from "./paginationItem"
import { Pagination } from "./pagination.styles"

const PaginationList = ({ numPages, currentPage }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const previousPage =
    currentPage - 1 === 1 ? "/gallery" : `/gallery/${currentPage - 1}`
  const nextPage = `/gallery/${currentPage + 1}`

  return (
    <Pagination>
      <ul>
        {isFirst ? (
          <PaginationItem disabled>
            <PaginationLink previous href="/gallery" />
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
                href={`/${i === 0 ? "gallery" : "gallery/" + (i + 1)}`}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={`page-number${i + 1}`}>
              <PaginationLink
                href={`/${i === 0 ? "gallery" : "gallery/" + (i + 1)}`}
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
