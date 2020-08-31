import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <div className="headHero">
    <div className="textBox">
      <div className="wraperLeft"></div>
      <div>
        <h1 className="animate__animated animate__fadeInUp animate__delay-2s bigTitle">
          Samuel <span>&</span> Olivia
        </h1>
        <h4 className="animate__animated animate__fadeInUp animate__delay-3s subText">
          <span>20.12.2020</span> - Soryaa Beach Resort
        </h4>
      </div>
      <div className="wraperRight"></div>
    </div>
    <button className="animate__animated animate__pulse animate__infinite rsvpButton">
      <Link to="/contact">RSVP</Link>
    </button>
  </div>
)

export default Header
