/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useTransition, animated, config } from "react-spring"
// Global Styles & Theme
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/styles/global"
import { theme } from "../components/styles/theme"
// Hooks
import useMedia from "../hooks/useMedia"
// Components
import Navigation from "./navigation"
import Footer from "./footer"
import MobileMenu from "./mobileMenu"

const Layout = ({ children, location }) => {
	const mobile = useMedia(theme.smQuery)
	const transitions = useTransition(children, children => children.key, {
		from: {
			opacity: 0,
			position: "static",
      width: "100%",
			transform: "translate3d(-100%,0,0)",
		},
		enter: {
			opacity: 1,
			transform: "translate3d(0%,0,0)",
			position: "static",
		},
		leave: {
			opacity: 0,
			transform: "translate3d(100%,0,0)",
      position: "absolute",
      top:`${mobile?"48px":"0px"}`
		},
		config: config.slow,
	})
	return (
		<ThemeProvider theme={theme}>
			<>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						minHeight: "100vh",
					}}
				>
					<GlobalStyles />
					{mobile ? <MobileMenu /> : <Navigation />}
					{transitions.map(({ item, key, props }) => {
						console.log("item:", item)
						console.log(location.pathname)
						console.log("children:", children)
						return (
								<animated.main
									key={key}
									style={{
										marginTop: `${mobile ? 0 : 3}em`,
										textAlign: "center",
										flex: "1",
										...props,
									}}
								>
									{item}
								</animated.main>

						)
					})}
					<Footer />
				</div>
			</>
		</ThemeProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
