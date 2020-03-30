import styled from "styled-components"

export const ContactContainer = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
    text-transform: upperCase;
    word-spacing: 1rem;
    color: ${({ theme }) => theme.primaryColor};
  }

  form {
    width: 30%;
    text-align: center;
  }

  div {
    margin: 0.5rem 0;
  }

  input,
  textarea {
    padding: 0.4rem 0.6rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border-color: white;
    font-weight: bolder;
  }

  textarea {
    resize: none;
    height: 150px;
  }

  button {
    padding: 0.2rem 2rem;
    border-radius: 7px;
    text-transform: upperCase;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;

    &:hover {
      cursor: pointer;
      background: white;
      color: black;
    }
  }
`