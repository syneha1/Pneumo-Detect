import React from "react";
import "./../styles/Main.css"; // We'll create this CSS file next

const Main = () => {
  return (
    <main className="main">
      <div className="text-content">
        <h1>Get Your X-ray Checked</h1>
        <p>Upload your X-ray to check for pneumonia with AI assistance</p>
        <button className="upload-btn">Upload X-ray</button>
      </div>
      <div className="image-content">
      <img
        src={require("./../assets/pneumo-detect.png")} 
        alt="X-ray"
        className="pneumo-detect"
      />

      </div>
    </main>
  );
};

export default Main;
