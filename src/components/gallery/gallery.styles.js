import styled from "styled-components"

export const GalleryContainer = styled.section`
  width: 80%;
  margin: 1.5rem auto;
  display: flex;
  flex-wrap: wrap;
`
export const Image = styled.div`
  width: 200px;
  height: 200px;
  margin: 1rem auto;

  &:hover {
    cursor: pointer;
  }
`
export const ModalContainer = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(102, 98, 101, 0.9);
`

export const Close = styled.div`
  align-self: flex-end;
  padding: 1rem 1rem;
  transform: rotate(45deg);
  color: ${({ theme }) => theme.primaryLight};

  svg {
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
`
