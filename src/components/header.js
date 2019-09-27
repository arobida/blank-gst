import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
// Components
import logo from "../images/gatsby-icon.png"
import Social from "../components/social"
import { theme } from "./styles/theme"

const nav_links = {
  display: "inline-block",
  padding: ".5em",
}
const links = {
  width: "2em",
  textTransform: "uppercase",
  color: theme.primaryLight,
  textDecoration: "none",
  fontWeight: "bold",
}

const Header = ({ siteTitle }) => {
  return (
    <Headroom>
      <header
        style={{
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
        <nav>
          <ul style={{ listStyle: "none" }}>
            <li className="nav_links" style={nav_links}>
              <Link to="/" style={links} activeStyle={{ color: theme.dark.orange }}>
                Home
              </Link>
            </li>
            <li className="nav_links" style={nav_links}>
              <Link to="/about" style={links} activeStyle={{ color: theme.dark.orange }}>
                About
              </Link>
            </li>
            <li className="nav_links" style={nav_links}>
              <Link
                to="/services"
                style={links}
                activeStyle={{ color: theme.dark.orange }}
              >
                Services
              </Link>
            </li>
            <li className="nav_links" style={nav_links}>
              <Link
                to="/contact"
                style={links}
                activeStyle={{ color: theme.dark.orange }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Social color={theme.primaryLight}/>
      </header>
    </Headroom>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
