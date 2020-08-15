import React, { useRef, useState } from 'react'
import "./videoCard.css"
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
const VideoCard = ({ url, likes, shares, channel, avatarSrc, song }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = (e) => {
    console.log("Press on Video");
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  }

  console.log("url", url);
  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src={url}
        alt="IG Reel Video"
        loop
      />
      <VideoFooter
        channel={channel}
        song={song}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc} />
    </div >
  )
}

export default VideoCard
