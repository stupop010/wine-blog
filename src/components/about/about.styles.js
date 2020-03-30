import styled from "styled-components"

export const AboutContainer = styled.section`
  display: flex;
  width: 90%;
  height: 100%;
  margin: 3rem auto 0 auto;
  color: ${({ theme }) => theme.primaryDark};
  div {
    width: 50%;
    padding: 0 0.5rem;
  }
`
