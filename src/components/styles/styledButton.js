import styled from "styled-components"
import { theme } from "./theme"

const StyledButton = styled.button`
    --borderWidth: 5;
    --boxShadowDepth: ${({ shadow }) => shadow?shadow:4};
    --buttonColor: ${({ color }) => color?color:theme.primaryDark};
    --fontSize: ${({ fontSize }) => fontSize?fontSize:3};
    --horizontalPadding: 16;
    --verticalPadding: 8;
    background: transparent;
    border: calc(var(--borderWidth) * 1px) solid var(--buttonColor);
    border-radius:${({ borderRadius }) => borderRadius?borderRadius:0};
    box-shadow: calc(var(--boxShadowDepth) * 1px)
      calc(var(--boxShadowDepth) * 1px) 0 #BDBDBD;
    color: var(--buttonColor);
    cursor: pointer;
    font-size: calc(var(--fontSize) * 1rem);
    font-weight: bold;
    outline: transparent;
    padding: calc(var(--verticalPadding) * 1px)
      calc(var(--horizontalPadding) * 1px);
    position: relative;
    transition: box-shadow 0.15s ease;

  :hover {
    box-shadow: calc(var(--boxShadowDepth) / 2 * 1px)
      calc(var(--boxShadowDepth) / 2 * 1px) 0 #888;
  }
  :active {
    box-shadow: 0 0 0 #888;
  }
  & .spans {
    -webkit-clip-path: var(--clip);
    bottom: calc(var(--borderWidth) * -1px);
    clip-path: var(--clip);
    left: calc(var(--borderWidth) * -1px);
    opacity: 0.25;
    position: absolute;
    right: calc(var(--borderWidth) * -1px);
    top: calc(var(--borderWidth) * -1px);
    z-index: 1;
  }
  & .spans:nth-of-type(1):hover,
  & .spans:nth-of-type(2):hover,
  & .spans:nth-of-type(3):hover,
  & .spans:nth-of-type(4):hover {
    --clip: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    z-index: 2;
  }
  & .spans:nth-of-type(1):hover ~ .bs:nth-of-type(1),
  & .spans:nth-of-type(2):hover ~ .bs:nth-of-type(2),
  & .spans:nth-of-type(3):hover ~ .bs:nth-of-type(3),
  & .spans:nth-of-type(4):hover ~ .bs:nth-of-type(4) {
    --clip: inset(0 0 0 0);
  }
  & .spans:nth-of-type(1) {
    --clip: polygon(0 0, 100% 0, 50% 50%, 50% 50%);
  }
  & .spans:nth-of-type(2) {
    --clip: polygon(100% 0, 100% 100%, 50% 50%);
  }
  & .spans:nth-of-type(3) {
    --clip: polygon(0 100%, 100% 100%, 50% 50%);
  }
  & .spans:nth-of-type(4) {
    --clip: polygon(0 0, 0 100%, 50% 50%);
  }
  & .bs {
    -webkit-clip-path: var(--clip);
    background: var(--buttonColor);
    border: calc(var(--borderWidth) * 1px) solid var(--buttonColor);
    border-radius:${({ borderRadius }) => borderRadius?borderRadius:0};
    bottom: calc(var(--borderWidth) * -1px);
    clip-path: var(--clip);
    color: var(--bg, #fafafa);
    font-weight: bold;
    left: calc(var(--borderWidth) * -1px);
    padding: calc(var(--verticalPadding) * 1px)
      calc(var(--horizontalPadding) * 1px);
    position: absolute;
    right: calc(var(--borderWidth) * -1px);
    top: calc(var(--borderWidth) * -1px);
    transition: -webkit-clip-path 0.25s ease;
    transition: clip-path 0.25s ease;
    transition: clip-path 0.25s ease, -webkit-clip-path 0.25s ease;
  }
  & .bs:nth-of-type(1) {
    --clip: inset(0 0 100% 0);
  }
  & .bs:nth-of-type(2) {
    --clip: inset(0 0 0 100%);
  }
  & .bs:nth-of-type(3) {
    --clip: inset(100% 0 0 0);
  }
  & .bs:nth-of-type(4) {
    --clip: inset(0 100% 0 0);
  }
`
export default StyledButton
