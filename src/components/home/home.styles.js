import styled from "styled-components"

export const HomeContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 0.2rem 0;
`

export const HomeMainSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 3rem;
`
export const HomeHeadBlog = styled.div`
  color: ${({ theme }) => theme.primaryDark};
  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  p {
    margin: 0.7rem 0rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.primaryLightGrey};
    span {
      color: black;
    }
  }
  button {
    background: transparent;
  }
`
