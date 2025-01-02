import React from "react";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Pneumodetect</div>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="create-account-btn">Create account</button>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <div className="hero-section">
          <div className="hero-text">
            <h1>Get Your X-ray Checked</h1>
            <p>Upload your X-ray to check for pneumonia with AI assistance</p>
            <button className="upload-btn">Upload X-ray</button>
          </div>
          <div className="pneumo-detect">
            <img src={require("./assets/pneumo-detect.png")} alt="pneumo-detect" />
          </div>
        </div>

        {/* Layout Section */}
        <div className="layout">
          {/* Left Side: Doctor Image and Message */}
          <div className="doctor-message-section">
            <div className="doctor">
              <img src={require("./assets/doctor.png")} alt="doctor" />
            </div>
            <div className="message">
              <h2>Make sure:</h2>
              <ul>
                <li>Uploaded image has X-ray on it</li>
                <li>The image is not blurry</li>
              </ul>
            </div>
          </div>

          {/* Right Side: Steps Section */}
          <div className="steps-section">
            <div className="step-box">
              <div className="step-number">1</div>
              <p>
                <strong>Upload X-ray</strong>
                <br />
                Make sure the image meets the guidelines
              </p>
            </div>
            <div className="step-box">
              <div className="step-number">2</div>
              <p>
                <strong>Get Results</strong>
                <br />
                Get your results with help of AI assistance
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
