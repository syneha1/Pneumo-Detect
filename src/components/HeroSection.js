import React from "react";
import "../styles/HeroSection.css";
import pneumoDetectImage from "../assets/pneumo-detect.png";

const HeroSection = ({ user, handleUpload, handleShowResults }) => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        {user ? (
          <>
            <h1>GET YOUR XRAY CHECKED</h1>
            <p>Upload your X-ray to check for pneumonia with AI assistance</p>
            {/* Action Buttons Below the Text */}
            <div className="action-buttons">
              <label htmlFor="file-upload" className="upload-btn">
                Upload X-ray
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleUpload}
              />
              <button className="results-btn" onClick={handleShowResults}>
                Show Results
              </button>
            </div>
          </>
        ) : (
          <>
            <h1>Get your X-ray checked through our</h1>
            <div className="highlight-box">PneumoDetect</div>
          </>
        )}
      </div>
      <div className="pneumo-detect">
        <img src={pneumoDetectImage} alt="Pneumodetect" />
      </div>
    </div>
  );
};

export default HeroSection;
