import styled from "styled-components"

export const ArchivesContainer = styled.div`
  text-align: center;
  padding: 0 3rem;
  color: ${({ theme }) => theme.primaryDark};

  h3 {
    padding: 0.2rem 0;
    background: ${({ theme }) => theme.primaryColor};
    color: white;
    border-radius: 10px;
    max-width: 170px;
    margin: auto;
  }

  ul {
    margin-top: 1.2rem;

    li {
      list-style: none;
      display: flex;
      align-items: center;
      text-align: left;
      padding: 0.5rem 0;
      color: ${({ theme }) => theme.primaryLightGrey};

      &:hover {
        color: black;
      }
    }

    svg {
      margin-right: 1rem;
      color: ${({ theme }) => theme.primaryColor};
    }
  }
`
