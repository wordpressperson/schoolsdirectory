import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif'
function Loading() {
    return (
        <div>
            <h3>school data loading ...</h3>
            <img src={loadingGif} alt="just some text while waiting" />
        </div>
    )
}

export default Loading
