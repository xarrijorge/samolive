import React from 'react'
import factSheet from '../images/Wedding Fact Sheet.pdf'

function wedding() {
    return (
        <div className="weddingSection">
            <h1>The Wedding Day</h1>
            <div className="linksSection">
                <p>
                    lick the blue button below to see the Wedding Fact Sheet &
                    the red buttons to learn the Song and dance for the
                    reception
                </p>
                <button className="blue">
                    <a
                        href={factSheet}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Fact Sheet
                    </a>
                </button>
                <button className="red">
                    <a
                        href="https://www.youtube.com/watch?v=jasoo3UDSwY&feature=youtu.be"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Song
                    </a>
                </button>
                <button className="red">
                    <a
                        href="https://www.youtube.com/watch?v=dv2qKpna3lM&feature=youtu.be"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Dance Moves
                    </a>
                </button>
            </div>
            <div className="quote">
                <blockquote>
                    “ Happy is the man who finds a true friend, and far happier
                    is he who finds that true friend in his wife.”
                    <p className="author"> *Franz Schubert</p>
                </blockquote>
            </div>
        </div>
    )
}

export default wedding
