import React, { Fragment } from "react"

import Header from "../components/header"
import SEO from "../components/seo"
import "../App.scss"

const IndexPage = () => (
  <Fragment>
    <SEO title="Home" />
    <Header />
  </Fragment>
)

export default IndexPage
