import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About Us</h1>
      <p>Learn more about what we do</p>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {allabout.map(about => {
          return (
            <div
              key={about.title}
              style={{
                width: "20em",
                height:"18em",
                margin: "1em",
                border: "2px solid #333",
                borderRadius: "1em",
              }}
            >
              <h3>{about.title}</h3>
              <p>{about.summary}</p>
            </div>
          )
        })}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default About
const allabout = [
  {
    title: "History",
    summary:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dicta, iste illo architecto consectetur sequi neque omnis necessitatibus ipsa excepturi, nemo beatae ea sapiente doloremque officia cumque inventore voluptatibus placeat.",
  },
  {
    title: "Why",
    summary:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dicta, iste illo architecto consectetur sequi neque omnis necessitatibus ipsa excepturi, nemo beatae ea sapiente doloremque officia cumque inventore voluptatibus placeat.",
  },
  {
    title: "Mission",
    summary:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dicta, iste illo architecto consectetur sequi neque omnis necessitatibus ipsa excepturi, nemo beatae ea sapiente doloremque officia cumque inventore voluptatibus placeat.",
  },
]
