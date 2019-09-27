import React from "react"
import { Link } from "gatsby"
import { useSpring, animated, config } from "react-spring"
import useMedia from "../hooks/useMedia"
import Layout from "../components/layout"
import StyledBgImage from "../components/bgImage"
import SEO from "../components/seo"
import Button from "../components/button"

const IndexPage = () => {
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
    <Layout>
      <SEO title="Home" />
      <StyledBgImage>
        <animated.h1 style={stroked}>Hello World</animated.h1>
        <div style={{ height: "150px", marginBottom: "1em" }}></div>
      </StyledBgImage>
      <Link to="/about">
        <Button fontSize={1.5}>Learn More</Button>
      </Link>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  )
}

export default IndexPage
