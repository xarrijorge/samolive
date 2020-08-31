import React, { Fragment } from "react"
import { Link } from "gatsby"

import RSVP from "../components/rsvp"
import SEO from "../components/seo"

const ContactPage = () => (
  <div className="contactPage">
    <SEO title="Page two" />
    <RSVP />
    <Link to="/" className="goHome">
      Home
    </Link>
  </div>
)

export default ContactPage
