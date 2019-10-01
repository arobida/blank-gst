import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = (props) => {
  return (
    <Layout location={props.location}>
      <SEO title="About" />
      <h1>About Us</h1>
      <p>Learn more about what we do</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default About
