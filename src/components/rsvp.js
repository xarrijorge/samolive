import React from "react"

const RSVP = () => (
  <form className="rsvpForm" netlify>
    <label htmlFor="name">
      <input type="text" name="name" placeholder="Full Name" />
    </label>
    <label htmlFor="contact">
      <input type="text" name="contact" placeholder="Contact Number" />
    </label>
    <label htmlFor="guests">
      <input
        type="number"
        min="1"
        max="10"
        name="guests"
        placeholder="Number of Guests"
      />
    </label>

    <button>send</button>
  </form>
)

export default RSVP
