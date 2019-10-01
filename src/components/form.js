import React from "react"
import { theme } from "../components/styles/theme"
import Button from "../components/button"

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
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <h2>Send A Message</h2>
      <label>Name</label>
      <input
        type="text"
        placeholder="ex. john doe"
        required
        name="name"
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
        name="email"
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
        name="message"
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
      <Button
        fontSize={1}
        borderRadius=".3em"
        color={theme.light.orange}
        onClick={onSubmit}
      >
        Send
      </Button>
    </form>
  )
}

export default Form
