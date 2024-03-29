import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import logo from "../images/gatsby-icon.png"
import { theme } from "./styles/theme"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          navLinks{
            name,
            link
          }
        }
      }
    }
  `)

  return (
    <footer>
      <div
        style={{
          width: "100%",
          background: theme.primaryDark,
          color: theme.primaryLight,
        }}
      >
        <div style={{ textAlign: "center", paddingTop: "1em" }}>
          <p>Join Our Mailing List:</p>
          <input
            style={{ height: "3em", borderRadius: ".6em" }}
            type="text"
            placeholder="Your Email"
          />
        </div>
        <ul
          style={{
            display: "flex",
            flexDirection: `row`,
            justifyContent: "center",
            listStyle: "none",
          }}
        >
          {data.site.siteMetadata.navLinks.map(item => {
            return (
              <li key={item.name} style={{ padding: ".3em" }}>
                <Link
                  to={item.link}
                  style={{ color: theme.primaryLight }}
                  activeStyle={{ color: theme.dark.orange }}
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <p style={{ paddingBottom: "" }}>
        <img
          src={logo}
          alt="logo"
          style={{
            width: "1.3em",
            transform: "translateY(.2em)",
            marginRight: ".3em",
          }}
        />
        {data.site.siteMetadata.title} ©{new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
