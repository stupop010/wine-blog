import React from "react"

import { PaginationListItem } from "./pagination.styles"

const PaginationItem = ({ children, active = false, disabled = false }) => {
  return (
    <PaginationListItem active={active} disabled={disabled}>
      {children}
    </PaginationListItem>
  )
}

export default PaginationItem
