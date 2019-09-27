import React, { useState } from "react"
import { Link } from "gatsby"
import { useSpring, animated, config } from "react-spring"
import useInput from "../hooks/useInput"
import useMedia from "../hooks/useMedia"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { theme } from "../components/styles/theme"
// for netlify forms
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
const Contact = () => {
  const [toggle, setToggle] = useState(false)
  const mobile = useMedia(theme.smQuery)
  const name = useInput("")
  const email = useInput("")
  const message = useInput("")
  const onSubmit = e => {
    e.preventDefault()
    setToggle(!toggle)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    })
      .then(() => console.log("Success!"))
      .catch(error => console.log(error))
  }
  const reset = () => {
    setToggle(false)
    name.clear()
    email.clear()
    message.clear()
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact Us</h1>
        {toggle === false ? (
          <Form
            onSubmit={onSubmit}
            name={name}
            email={email}
            message={message}
          />
        ) : (
          <Sent name={name} email={email} reset={reset} />
        )}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

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

const Form = ({ onSubmit, name, email, message }) => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "1em",
      }}
    >
      <input type="hidden" name="contact" value="contact" />
      <h2>Send A Message</h2>
      <label>Name</label>
      <input
        type="text"
        placeholder="ex. john doe"
        required
        value={name.value}
        onChange={name.onChange}
        style={{
          textAlign: "center",
          height: "3em",
          width: "13em",
          marginBottom: "5px",
          borderTop: "0",
          borderLeft: "0",
          borderRight: "0",
          borderBottomWidth: "1px",
          borderBottomColor: theme.primaryDark,
          background: theme.primaryLight,
        }}
      />
      <label>Email</label>
      <input
        type="email"
        placeholder="ex. john@gmail.com"
        required
        value={email.value}
        onChange={email.onChange}
        style={{
          textAlign: "center",
          height: "3em",
          width: "13em",
          marginBottom: "5px",
          borderTop: "0",
          borderLeft: "0",
          borderRight: "0",
          borderBottomWidth: "1px",
          borderBottomColor: theme.primaryDark,
          background: theme.primaryLight,
        }}
      />
      <label>Reason For Contact</label>
      <textarea
        type="text"
        required
        value={message.value}
        onChange={message.onChange}
        style={{
          height: "6em",
          width: "20em",
          marginBottom: "1em",
          borderTop: "0",
          borderLeft: "0",
          borderRight: "0",
          borderBottomWidth: "1px",
          borderBottomColor: theme.primaryDark,
          background: theme.primaryLight,
        }}
      />
      <Button fontSize={1} borderRadius=".3em" color={theme.light.orange} onClick={onSubmit}>
        Send
      </Button>
    </form>
  )
}

export default Contact
