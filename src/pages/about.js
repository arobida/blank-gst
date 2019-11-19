import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AccordianGallery from "../components/AccordianGallery"

const About = (props) => {
  return (
    <>
      <SEO title="About" />
      <h1>About Us</h1>
      <p>Learn more about what we do</p>
      <AccordianGallery/>
      <Link to="/">Go back to the homepage</Link>
    </>
  )
}

export default About
