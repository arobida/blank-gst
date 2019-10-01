import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = (props) => {
  return (
    <Layout location={props.location}>
      <SEO title="Services" />
      <h1>Services</h1>
      <p>Check out all of our services</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Services
