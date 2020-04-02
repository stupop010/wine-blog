import styled from "styled-components"

export const Pagination = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }
`

export const PaginationListItem = styled.li`
  text-align: center;
  height: 40px;
  width: 35px;
  color: ${({ active }) => (active ? "white" : "black")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "all")};
  opacity: ${({ disabled }) => (disabled ? "0.6" : "1")};
  background-color: ${({ active }) => (active ? "#7C1F49" : "white")};
  border: 1px solid;
  border-color: ${({ active }) => (active ? "#7C1F49" : "black")};
  border-right: none;
  border-radius: 1px;

  &:last-child {
    border-right: 1px solid #666;
  }

  a {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
