import styled from "styled-components"
import device from "../deviceSizes"

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

  @media ${device.tablet} {
    display: block;

    div {
      width: 95%;
    }
  }

  @media ${device.tablet} {
    div {
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
`
