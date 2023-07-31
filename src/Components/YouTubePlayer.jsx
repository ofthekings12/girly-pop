import React, { useEffect } from "react";

function YouTubePlayer() {
  useEffect(() => {
    const startAtSeconds = 0;
    const videoId = "Y2j8zmD5klY";

    const player = new window.YT.Player("youtube-player", {
      height: "0",
      width: "0",
      videoId,
      playerVars: {
        autoplay: 1, // Autoplay the video
        controls: 0, // Hide the player controls
        modestbranding: 1, // Hide YouTube logo
        rel: 0, // Hide related videos after playback
        showinfo: 0, // Hide video title and uploader info
        loop: 1, // Loop the video
        mute: 0, // Mute the video
        start: startAtSeconds,
      },
      events: {
        onReady: onPlayerReady,
      },
    });

    function onPlayerReady(event) {
      event.target.playVideo();
    }

    return () => {
      player.destroy();
    };
  }, []);

  return <div id="youtube-player"></div>;
}

export default YouTubePlayer;
