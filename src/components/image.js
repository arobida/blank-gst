import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Image = (props) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
			name
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
const image = data.images.edges.find(n => {
	return n.node.relativePath.includes(props.filename);
  });
  if (!image) { return null; }
  const imageData = image.node.childImageSharp.fluid
  return <Img fluid={imageData} alt={props.alt}/>
}

export default Image
