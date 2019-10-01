import React from "react"
import { useSpring, animated, config } from "react-spring"

const Sent = ({ name, email, reset }) => {
  const appear = useSpring({
    to: { height: "369px", transform: "translateX(0%)" },
    from: { height: "369px", transform: "translateX(-100%)" },
    config: config.wobbly,
  })
  return (
    <animated.div style={appear}>
      <h2>Thanks For Reaching Out {name.value}!</h2>
      <p>We will respond shortly to: {email.value}</p>
      <button onClick={reset}>Reset</button>
    </animated.div>
  )
}
export default Sent
