import React from "react"
import { BurgerMenu, BarOne, BarThree, BarTwo } from "./hamBurger.styles"

const HamBurger = ({ open, toggleBurger }) => (
  <BurgerMenu onClick={toggleBurger}>
    <BarOne open={open} />
    <BarTwo open={open} />
    <BarThree open={open} />
  </BurgerMenu>
)

export default HamBurger
