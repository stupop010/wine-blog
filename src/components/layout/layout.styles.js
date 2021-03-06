import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: ${({ open }) => (open ? "100vh" : "auto")};
  overflow-y: ${({ open }) => (open ? "hidden" : "auto")};

  main {
    flex: 1;
  }

  footer {
    padding: 1rem;
    text-align: center;
    color: black;
  }
`
