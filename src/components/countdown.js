import React from 'react'
import Countdown, { zeroPad } from 'react-countdown'
import subIcon from '../images/wed10.png'
import RingIcon from '../images/ring.png'

// Random component
const Completionist = () => <p>You are good to go!</p>

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />
    } else {
        // Render a countdown
        return (
            <div className="countDownPage">
                <h3>We Are Getting Married</h3>
                <img src={subIcon} alt="" className="pageSubIcon" />

                <h4>
                    Remaining days for our wedding ceremony, We are expecting
                    all of your presence.
                </h4>
                <div className="countdown">
                    <div className=" dayCount timeBlock">
                        {zeroPad(days)}
                        <p className="text">days</p>
                    </div>
                    <p className="colon">:</p>
                    <div className="hourCount timeBlock">
                        {zeroPad(hours)}
                        <p className="text">hours</p>
                    </div>
                    <p className="colon">:</p>
                    <div className="minCount timeBlock">
                        {zeroPad(minutes)}
                        <p className="text">minutes</p>
                    </div>
                    <p className="colon">:</p>
                    <div className="secCount timeBlock">
                        {zeroPad(seconds)}
                        <p className="text">seconds</p>
                    </div>
                </div>
                <div className="ringSection">
                    <img src={RingIcon} alt="2 rings attached" />
                    <p>Remaining days for our Wedding ceremony</p>
                </div>
            </div>
        )
    }
}

const CountDownTimer = () => (
    <Countdown date={'December 20, 2020'} renderer={renderer} />
)

export default CountDownTimer
