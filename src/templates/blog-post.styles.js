import styled from "styled-components"
import device from "../components/deviceSizes"

export const BlogComponent = styled.section`
  width: 50%;
  margin: auto;
  padding-top: 3rem;
  color: ${({ theme }) => theme.primaryDark};

  h1 {
    padding: 0.7rem 0;
    margin: 0;
    font-size: 2.6rem;
    font-family: "Noto Sans", sans-serif;
  }

  img {
    width: 100%;
  }

  @media ${device.laptop} {
    width: 80%;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media ${device.mobileL} {
    width: 95%;
  }
`
export const Link = styled.a`
  text-decoration: underline;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.primaryColor};

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
    text-decoration: underline;
  }
`
export const AuthorBar = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0.7;

  @media ${device.laptop} {
    flex-direction: column;

    p {
      margin-bottom: 0;
    }

    div {
      margin: 0.5rem 0;
    }
  }
`
