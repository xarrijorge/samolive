import React from "react"
import { Link } from "gatsby"
import subIcon from "../images/wed10.png"

const Header = () => (
  <div className="headHero">
    <div className="firstImage"></div>
    <div className="textBox">
      <div className="wraper left"></div>
      <div>
        <h1 className="animate__animated animate__fadeInUp animate__delay-2s bigTitle">
          Samuel <span>&</span> Olivia
        </h1>
        <h4 className="animate__animated animate__fadeInUp animate__delay-3s subText">
          <span>December 20, 2020</span> - Soryah Beach Resort
        </h4>
      </div>
      <div className="wraper right"></div>
    </div>
    <button className="animate__animated animate__pulse animate__infinite rsvpButton">
      <Link to="/contact">RSVP</Link>
    </button>
  </div>
)

const Page = () => (
  <div className="lovePage">
    <h1>Story of Love</h1>
    <img src={subIcon} alt="" className="pageSubIcon" />
    <h4>
      When you find the one person you can't live without. your soul mate thinks
      of you & only you. When you are talking to each other, you say the same
      thing without knowing it.
    </h4>
    <div className="bioBox">
      <div className="bio">
        <h3 className="title">Samuel Deputy</h3>
        <div className="content">
          We met through a mutual friend at the end of our freshman year in
          college at Georgia. I noticed her eyes, and how outgoing she was.
        </div>
      </div>
      <div className="profilePic">
        <img src="#" alt="" />
      </div>
      <span className="loveIcon"></span>
      <div className="profilePic">
        <img src="#" alt="" />
      </div>
      <div className="bio">
        <h3 className="title">Olivia Gibson</h3>
        <div className="content">
          We did meet through a mutual friend at the end of our first year in
          college at Georgia. We got along really well and clicked instantly.
        </div>
      </div>
    </div>
  </div>
)

export default Header
export { Page }
