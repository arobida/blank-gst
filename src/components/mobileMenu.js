import React, { useState } from "react"
import Burger from "./burger"
import Menu from "./menu"

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div style={{paddingBottom:'3em'}}>
      <Burger toggle={toggle} setToggle={setToggle}/>
      <Menu toggle={toggle} setToggle={setToggle} />
    </div>
  )
}

export default MobileMenu
