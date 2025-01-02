import React from "react";
import "./../styles/Guidelines.css";

const Guidelines = () => {
  return (
    <div className="guidelines">
      <div className="guidelines-text">
        <h2>Make sure:</h2>
        <ul>
          <li>Uploaded image has X-ray on it</li>
          <li>The image is not blurry</li>
        </ul>
      </div>
      <div className="doctor">
        <img src={require("./../assets/doctor.png")} alt="doctor" />
      </div>
    </div>
  );
};

export default Guidelines;

