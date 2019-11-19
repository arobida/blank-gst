import React from "react"
import Layout from "./src/components/layout"

export const onClientEntry = () => {
	// IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
	if (typeof window.IntersectionObserver === `undefined`) {
		import(`intersection-observer`)
		console.log(`# IntersectionObserver is polyfilled!`)
	}
}

export const wrapPageElement = ({ element, props }) => {
	return <Layout {...props}>{element}</Layout>
}
