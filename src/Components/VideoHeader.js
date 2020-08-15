import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import "./VideoHeader.css"

const VideoHeader = () => {
  return (
    <div className="videoHeader">
      <ArrowBackIosIcon />
      <h3>Reels</h3>
      <CameraAltIcon />

    </div>
  )
}

export default VideoHeader
