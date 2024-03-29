import React from "react"
import { Link } from "gatsby"
import { useSpring, animated, config } from "react-spring"
import useMedia from "../hooks/useMedia"
import Layout from "../components/layout"
import StyledBgImage from "../components/bgImage"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => {
  const mobile = useMedia("(max-width:500px)")
  const stroked = useSpring({
    to: {
      fontSize: "40px",
      WebkitTextStroke: "2px black",
      color: "white",
      textShadow:
        "3px 3px 0 #000,-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000, 1px 1px 0 #000",
    },
    from: {
      fontSize: "40px",
      WebkitTextStroke: "0px white",
      color: "black",
      textShadow:
        "3px 3px 0 #000,-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000, 1px 1px 0 #000",
    },
    config: config.molasses,
  })
  return (
    <>
      <SEO title="Home" />
      <StyledBgImage>
        <animated.h1 style={stroked}>Hello World</animated.h1>
        <div style={{ width: "200px", margin: "auto" }}>
          <Image filename="gatsby-astronaut.png" alt="astronaut"/>
        </div>
        <div style={{ height: "150px", marginBottom: "1em" }} />
      </StyledBgImage>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </>
  )
}

export default IndexPage
