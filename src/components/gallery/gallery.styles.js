import styled from "styled-components"
import { motion } from "framer-motion"
import device from "../deviceSizes"

export const GalleryContainer = styled.section`
  width: 80%;
  margin: 1.5rem auto;
  display: flex;
  flex-wrap: wrap;

  @media ${device.tablet} {
    width: 100%;
  }
`
export const Image = styled(motion.div)`
  width: 200px;
  height: 200px;
  margin: 1rem auto;

  &:hover {
    cursor: pointer;
  }
`
export const ModalContainer = styled(motion.div)`
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

export const CloseBtn = styled.div`
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

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Chevron = styled.div`
  color: ${({ theme }) => theme.primaryDark};
  border-radius: 4px;
  padding: 0.5rem;
  transition: all 300ms;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
    background: black;
    color: white;
  }
`
export const Carousel = styled.section`
  display: flex;
  justify-content: center;

  div {
    margin: 0 0.4rem;
  }
`
export const PictureTitle = styled.h2`
  margin: 0.5rem;
  text-align: center;
  color: ${({ theme }) => theme.primaryDark};
`
