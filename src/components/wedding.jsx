import React from 'react'

function wedding() {
    return (
        <div className="weddingSection">
            <h1>The Wedding Day</h1>
            <div className="linksSection">
                <p>
                    Click the blue button below so see the order of Our wedding
                    day event & the red button to learn the dance for the
                    wedding day
                </p>
                <button className="blue">Wedding Info</button>
                <button className="red">Dance Video</button>
            </div>
            <div className="quote">
                <blockquote>
                    “ Happy is the man who finds a true friend, and far happier
                    is he who finds that true friend in his wife.”
                    <p className="author"> *Quote Author</p>
                </blockquote>
            </div>
        </div>
    )
}

export default wedding
