import React from "react"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const RSVP = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  return (
    <form
      className="rsvpForm"
      name="RSVP"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
    >
      <input type="hidden" name="form-name" value="RSVP" />
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="contact">
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="guests">
        <input
          type="number"
          min="1"
          max="10"
          name="guests"
          placeholder="Number of Guests"
          onChange={handleChange}
        />
      </label>

      <button type="submit">Send</button>
    </form>
  )
}

export default RSVP
