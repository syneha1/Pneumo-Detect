import React from "react";
import "./../styles/Steps.css";

const Steps = () => {
  return (
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
  );
};

export default Steps;
