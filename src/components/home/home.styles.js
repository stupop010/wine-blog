import styled from "styled-components"

export const HomeContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 0.2rem 0;
`
export const HomeHero = styled.div`
  box-shadow: 1px 1px 2px 0px rgba(166, 164, 166, 0.7);
`

export const HomeMainSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 5rem;
`

export const HomeHeadBlog = styled.div`
  color: ${({ theme }) => theme.primaryDark};
  h2 {
    font-size: 2.5rem;
    font-family: "Merriweather", serif;
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.7rem;
  }

  button {
    background: transparent;
    border-radius: 4px;
    padding: 0.2rem 0.5rem;
    margin-bottom: 0.7rem;
    color: ${({ theme }) => theme.primaryLightGrey};
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.primaryLight};
      background: ${({ theme }) => theme.primaryDark};
    }
  }
`

export const CreatedBy = styled.p`
  margin: 0.7rem 0rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.primaryLightGrey};
  span {
    color: black;
  }
`

export const HomeBlogList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  div {
    width: 50%;
    margin: 0.7rem 0;
    padding: 0 0.9rem;
    color: ${({ theme }) => theme.primaryDark};

    h3 {
      margin: 0.8rem 0;
      font-family: "Merriweather", serif;
    }

    p {
      margin-bottom: 1rem;
      font-size: 0.8rem;
      line-height: 1.3;
      color: ${({ theme }) => theme.primaryLightGrey};
    }
  }
`
