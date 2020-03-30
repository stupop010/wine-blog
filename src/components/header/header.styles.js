import styled from "styled-components"

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-center: center;
  padding: 1.1rem 0;
`
export const Title = styled.h1`
  font-size: 4rem;
  font-family: "PT Sans", sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryColor};
`

export const TitleSpan = styled.span`
  font-family: "Liu Jian Mao Cao", cursive;
  display: block;
  padding-left: 5.5rem;
  margin: -1.2rem;
  font-size: 2.5rem;
`
