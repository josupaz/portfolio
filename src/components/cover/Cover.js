import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Your Tech Hands</h1>
      <p>Developer | Designer | Networking | Interface </p>
    </div>
  );
};

export default Cover;
