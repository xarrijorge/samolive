import React from 'react'
import { Link } from 'gatsby'
import subIcon from '../images/wed10.png'
import LovePic from '../videos/teshach.mp4'
import VidPoster from '../images/LovePic.jpg'
const Header = () => (
    <div className="headHero child">
        <div className="firstImage"></div>
        <div className="textBox">
            <div className="wraper left"></div>
            <div>
                <h1 className="animate__animated animate__fadeInUp animate__delay-3s bigTitle">
                    Samuel <span>&</span> Olivia
                </h1>
                <h4 className="animate__animated animate__fadeInUp animate__delay-2s subText">
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
    <div className="lovePage child">
        <h1>Story of Love</h1>
        <img src={subIcon} alt="" className="pageSubIcon" />
        <div className="scriptureBox">
            <blockquote className="scripture">
                Then he answered and spake unto me, saying, this is the word of
                the Lord unto Zerubbabel, saying, not by might, nor by power,
                but by my spirit, saith the Lord of hosts.
                <p>* Zechariah 4 : 6</p>
            </blockquote>
        </div>
        <div className="loveImageBox">
            <video
                className="lovePic"
                poster={VidPoster}
                src={LovePic}
                type="video/mp4"
                alt="Samuel and Olivia standing side by side"
                controls
            />
        </div>
    </div>
)

export default Header
export { Page }
