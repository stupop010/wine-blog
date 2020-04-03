import styled from "styled-components"

export const MenuContainer = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(38, 37, 36, 0.9);
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? `translateY(0)` : `translateY(-100%)`)};

  nav {
    margin-top: 4rem;
    text-align: center;
    color: white;
    font-size: 2rem;
    font-weight: bolder;
    text-transform: uppercase;

    ul {
      li {
        margin: 2rem 0;

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
`
