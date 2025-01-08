import React from "react";
import "../styles/CreateAccountModal.css";

const CreateAccountModal = ({ formData, handleInputChange, handleCreateAccount, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create Account</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName || ""}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName || ""}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email || ""}
          onChange={handleInputChange}
        />
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
        <button onClick={handleCreateAccount}>Create Account</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default CreateAccountModal;
