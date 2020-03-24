import styled from "styled-components"

export const SocialContainer = styled.div`
  ul {
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
  }
`
