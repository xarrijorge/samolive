import React, { Fragment } from "react"

import Header, { Page } from "../components/header"
import SEO from "../components/seo"

import "../animate.css"
import "../App.scss"

const IndexPage = () => (
  <Fragment>
    <SEO title="Home" />
    <Header />
    <Page />
  </Fragment>
)

export default IndexPage
