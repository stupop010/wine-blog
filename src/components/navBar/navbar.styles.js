import styled from "styled-components"

export const NavBarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0.5rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.primaryDark};
  box-shadow: rgba(0, 0, 0, 0.25) 0.25rem 0px 0.25rem;
  overflow: hidden;
`

export const List = styled.ul`
  display: flex;

  li {
    list-style: none;
    font-size: 1.1rem;
    margin-right: 0.8rem;
    text-transform: capitalize;
    font-weight: 600;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`
export const Search = styled.div`
  display: flex;
  align-items: center;
`

export const SearchForm = styled.form`
  display: flex;
  input {
    border: 1px solid #999999;
    border-right: none;
    padding-left: 0.5rem;
    width: 8rem;

    &:focus {
      outline: none;
    }
  }
  button {
    background: transparent;
    border: 1px solid #999999;
    border-left: none;
  }
`
