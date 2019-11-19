import styled from "styled-components"

export const StyledAccordianGallery = styled.div`
	padding: 75px 0;
	margin: 0 auto;
	width: 95vw;

	h1 {
		position: relative;
		margin-bottom: 45px;
		font-family: "Oswald", sans-serif;
		font-size: 44px;
		text-transform: uppercase;
		color: #424242;
	}

	.gallery-wrap {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 70vh;
	}

	.item {
		flex: 1;
		height: 100%;
		background-position: center;
		background-size: cover;
		background-repeat: none;
		transition: flex 0.8s ease;
	}
	.item:hover {
		flex: 20;
	}

	.item-1 {
		background-image: url("https://images.unsplash.com/photo-1499198116522-4a6235013d63?auto=format&fit=crop&w=1233&q=80");
	}

	.item-2 {
		background-image: url("https://images.unsplash.com/photo-1492760864391-753aaae87234?auto=format&fit=crop&w=1336&q=80");
	}

	.item-3 {
		background-image: url("https://images.unsplash.com/photo-1503631285924-e1544dce8b28?auto=format&fit=crop&w=1234&q=80");
	}

	.item-4 {
		background-image: url("https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&w=1352&q=80");
	}

	.item-5 {
		background-image: url("https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1234&q=80");
	}
`
