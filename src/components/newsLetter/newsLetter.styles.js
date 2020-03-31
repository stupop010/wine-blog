import styled from "styled-components"

export const NewsLetterContainer = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  padding: 0 0.5rem;

  h3 {
    padding: 0.2rem 0;
    background: ${({ theme }) => theme.primaryColor};
    color: white;
    border-radius: 10px;
    max-width: 200px;
    margin: auto;
    text-transform: uppercase;
  }

  form {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;

    input {
      padding: 0.3rem 0.2rem;
      border-color: ${({ theme }) => theme.primaryColor};

      &:focus {
        outline: none;
      }
    }

    button {
      margin-top: 0.1rem;
      align-self: flex-end;
      width: 100px;
      padding: 0.2rem 0.4rem;
      background: #541531;
      color: white;
      border-radius: 9px;

      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.primaryColor};
      }
    }
  }
`
