import styled from "styled-components"

export const BurgerMenu = styled.div`
  display: inline-block;
  cursor: pointer;
  position: fixed;
  right: 20px;
  top: 40px;
  z-index: 9999;
  background: #7c1f49;
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  div {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 4px 0;
    transition: 0.4s;
  }
`
export const BarOne = styled.div`
  transform: ${({ open }) =>
    open ? `rotate(-45deg) translate(-4px, 4px)` : `none`};
`
export const BarTwo = styled.div`
  opacity: ${({ open }) => (open ? "0" : "1")};
`
export const BarThree = styled.div`
  transform: ${({ open }) =>
    open ? `rotate(45deg) translate(-6px, -6px)` : `none`};
`

// .burger-menu.open .bar1 {
//   -webkit-transform: rotate(-45deg) translate(-4px, 4px);
//   transform: rotate(-45deg) translate(-4px, 4px);
// }

// .burger-menu.open .bar2 {
//   opacity: 0;
// }

// .burger-menu.open .bar3 {
//   -webkit-transform: rotate(45deg) translate(-6px, -6px);
//   transform: rotate(45deg) translate(-6px, -6px);
// }
