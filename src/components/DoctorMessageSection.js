import React from "react";
import "../styles/DoctorMessageSection.css";
import doctorImage from "../assets/doctor.png";

const DoctorMessageSection = () => {
  return (
    <div className="doctor-message-section">
      <div className="doctor">
        <img src={doctorImage} alt="Doctor" />
      </div>
      <div className="message">
        <h2>Make sure:</h2>
        <ul>
          <li>Uploaded image has X-ray on it.</li>
          <li>The image is not blurry.</li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorMessageSection;
