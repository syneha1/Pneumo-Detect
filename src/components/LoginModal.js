import React from "react";
import "../styles/LoginModal.css";

const LoginModal = ({ formData, handleInputChange, handleLogin, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username || ""}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password || ""}
          onChange={handleInputChange}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default LoginModal;

