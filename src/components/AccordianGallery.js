import React from "react"
import {StyledAccordianGallery} from "./styles/StyledAccordianGallery"

const AccordianGallery = props => {
	return (
		<StyledAccordianGallery className="container">
			<h1>Gallery</h1>
			<div className="gallery-wrap">
				<div className="item item-1"></div>
				<div className="item item-2"></div>
				<div className="item item-3"></div>
				<div className="item item-4"></div>
				<div className="item item-5"></div>
			</div>
		</StyledAccordianGallery>
	)
}

export default AccordianGallery
