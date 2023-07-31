import React, { useState, useEffect } from "react";
import videobg from "../assets/girlypopbglow.mp4";
import "./ActiveScreen.css";
import YouTubePlayer from "./YouTubePlayer";

function ActiveScreen({ closePlayer }) {
  const [buttonOpacity, setButtonOpacity] = useState(1);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    // After 3 seconds, reduce the opacity to 0 over 2 seconds
    const timer = setTimeout(() => {
      setButtonOpacity(0);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="video-bg">
        <YouTubePlayer videoId="Y2j8zmD5klY" isActive={true} />
      <video className="visuals" src={videobg} autoPlay loop muted />
      <div className="chill">
      <button className="chill-btn"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => closePlayer(false)}
        style={{ opacity: hover ? 1 : buttonOpacity }}
      >
        K, chill ✋🏽
      </button>
      </div>
    </div>
  );
}

export default ActiveScreen;
