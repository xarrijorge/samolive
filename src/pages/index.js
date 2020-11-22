import React, { Fragment } from "react"

import Header, { Page } from "../components/header"
import CountDownTimer from '../components/countdown'
import SEO from "../components/seo"

import "../animate.css"
import "../App.scss"

const IndexPage = () => (
  <div className="container">
    <SEO title="Home" />
    <Header />
    <Page />
    <CountDownTimer/>
  </div>
)

export default IndexPage
