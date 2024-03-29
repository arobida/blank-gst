import styled from "styled-components"

export const StyledBurger = styled.button`
  position: fixed;
  top: 3%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 51;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, toggle }) =>
      toggle ? theme.primaryLight : theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ toggle }) => (toggle ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ toggle }) => (toggle ? "0" : "1")};
      transform: ${({ toggle }) =>
        toggle ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ toggle }) => (toggle ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
