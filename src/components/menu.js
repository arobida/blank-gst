import React from "react"
import { bool } from "prop-types"
import { StyledMenu } from "./styles/styledMenu"
import {theme} from "./styles/theme"
import { Link } from "gatsby"
import logo from "../images/gatsby-icon.png"
import Social from "./social"

const Menu = ({ toggle }) => {
  return (
    <StyledMenu toggle={toggle}>
      <img
        src={logo}
        alt="logo"
        style={{ width: "2em", margin: "0 auto", marginBottom: "1em" }}
      />
      <Link to="/" activeStyle={{ color: theme.dark.orange }}>
        <span role="img" aria-label="about us">
          🏠
        </span>
        Home
      </Link>
      <Link to="/about" activeStyle={{ color: theme.dark.orange }}>
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About
      </Link>
      <Link to="/services" activeStyle={{ color: theme.dark.orange }}>
        <span role="img" aria-label="price">
          💵
        </span>
        Services
      </Link>
      <Link to="/contact" activeStyle={{ color: theme.dark.orange }}>
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </Link>
      <div style={{ textAlign: "center", marginTop: "1.5em" }}>
        <Social size="2em" color={theme.primaryLight} />
      </div>
    </StyledMenu>
  )
}
Menu.propTypes = {
  toggle: bool.isRequired,
}

export default Menu
