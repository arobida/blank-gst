import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useGesture } from "react-with-gesture"
import { theme } from "./styles/theme"

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
  const bind = useGesture(values=>console.log(values))
  return (
    <nav {...bind()} style={{ background: theme.primaryDark }}>
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
    </nav>
  )
}

export default Navigation