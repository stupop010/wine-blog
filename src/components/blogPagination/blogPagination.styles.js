import styled from "styled-components"
import device from "../deviceSizes"

export const BlogPagContainer = styled.section`
  max-width: 700px;
  margin: auto;
  color: black;

  @media ${device.tablet} {
    max-width: 550px;
  }

  @media ${device.mobileL} {
    max-width: 95%;
  }
`

export const Blog = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  min-height: 200px;
  margin: 1.5rem 0;
  padding: 0.2rem;
  border: 1px solid #666;
`
export const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  margin: 0 0.3rem;

  h2 {
    margin: 0.2rem 0;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.2;
    margin: 0;
    overflow: hidden;
  }

  div {
    font-size: 0.7rem;
    align-self: flex-end;
  }
`
