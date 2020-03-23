import styled from "styled-components"

export const NavBarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0.5rem;
  box-shadow: 0.25rem 0 0.25rem rgba(0, 0, 0, 0.25);
  line-height: 1.6rem;
  color: ${({ theme }) => theme.primaryDark};
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
export const SocialList = styled.ul`
  display: flex;
  margin-right: 1rem;

  li {
    list-style: none;
    margin: 0 0.3rem;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
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
