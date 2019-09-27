import React from "react"
import { FaInstagram, FaEnvelope, FaFacebook } from "react-icons/fa"
import { theme } from "./styles/theme"

const Social = ({size,color}) => {
  return (
    <div>
      <FaFacebook size={size?size:"1.3em"} color={color?color:"orange"} style={{margin:'.3em'}}/>
      <FaInstagram size={size?size:"1.3em"} color={color?color:"orange"} style={{margin:'.3em'}}/>
      <FaEnvelope size={size?size:"1.3em"} color={color?color:"orange"} style={{margin:'.3em'}}/>
    </div>
  )
}

export default Social
