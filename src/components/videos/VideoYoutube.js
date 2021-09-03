import React from 'react'

const VideoYoutube = ({ videoSrcURL, videoTitle, ...props }) => {
    return (
        <div className="video">
            <iframe
            src={videoSrcURL}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            width="100%"
            />
        </div>
    )
}

export default VideoYoutube
