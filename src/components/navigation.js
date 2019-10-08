import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useGesture } from "react-with-gesture"
import { theme } from "./styles/theme"
import logo from "../images/gatsby-icon.png"
import Social from "./social"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          navLinks {
            name
            link
          }
        }
      }
    }
  `)
  const bind = useGesture(values => console.log(values))
  return (
    <nav
      style={{
        position: "fixed",
        zIndex: "50",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: theme.primaryDark,
        paddingLeft: "2em",
        paddingRight: "2em",
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" style={{ width: "2em" }} />
      </Link>
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
                style={{
                  color: theme.primaryLight,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  fontWeight:'bold'
                }}
                activeStyle={{ color: theme.dark.orange }}
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
      <Social color={theme.primaryLight} />
    </nav>
  )
}

export default Navigation
