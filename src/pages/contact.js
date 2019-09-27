import React, { useState } from "react"
import { Link } from "gatsby"
import { useSpring, animated, config } from "react-spring"
import ReactIframe from "react-iframe"
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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent:`${mobile?"center":"flex-start"}`
        }}
      >
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
        <ul style={{ listStyle: "none", margin: "1em" }}>
          <h2>Business Hours</h2>
          <li>Monday - Friday: 7am-4pm</li>
          <li>Saturday: 9am-3pm</li>
          <li>Sunday: closed</li>
        </ul>
        <ul style={{ listStyle: "none", margin: "1em" }}>
          <h2>Address</h2>
          <li>6420 Sequence Dr, San Diego, CA 92121</li>
          <li>
            <ReactIframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1714978.134642616!2d-117.1819036310449!3d32.90962349792293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc077b22137d53%3A0x53a49543aaee6587!2sGoogle%20SAN%20Sequence%20Dr!5e0!3m2!1sen!2sus!4v1569343888378!5m2!1sen!2sus"
            />
          </li>
        </ul>
      </div>
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
      <Button fontSize={1} borderRadius=".3em" onClick={onSubmit}>
        Send
      </Button>
    </form>
  )
}

export default Contact
