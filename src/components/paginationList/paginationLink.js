import React from "react"
import { Link } from "gatsby"

const PaginationLink = ({ children, previous = false, next = false, href }) => {
  let defaultCaret
  if (previous) {
    defaultCaret = "\u2039"
  } else if (next) {
    defaultCaret = "\u203A"
  }

  return <Link to={href}>{children || defaultCaret}</Link>
}

export default PaginationLink
