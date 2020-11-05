import React, { Fragment } from "react"

import Header, { Page } from "../components/header"
import SEO from "../components/seo"

import "../animate.css"
import "../App.scss"

const IndexPage = () => (
  <div className="container">
    <SEO title="Home" />
    <Header />
    <Page />
  </div>
)

export default IndexPage
