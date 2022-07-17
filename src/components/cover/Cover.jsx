import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <img className="logo2"
          src="./4.png"
          alt="logo"
        />
      <p>Networking - Smart hands - IT Support - Infrastructure</p>
    </div>
  );
};

export default Cover;
