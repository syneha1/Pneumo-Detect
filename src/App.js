import React, { useState } from "react";
import "./styles/global.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LoginModal from "./components/LoginModal";
import CreateAccountModal from "./components/CreateAccountModal";
import DoctorMessageSection from "./components/DoctorMessageSection";
import StepsSection from "./components/StepsSection";

const App = () => {
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [uploadedFile, setUploadedFile] = useState(null); // State to store uploaded file
  const [result, setResult] = useState(""); // State to store result from backend or ML model

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateAccount = () => {
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.username &&
      formData.password
    ) {
      alert("Account created successfully!");
      setShowCreateAccountModal(false);
      setFormData({});
    } else {
      alert("Please fill out all fields!");
    }
  };

  const handleLogin = () => {
    if (formData.username && formData.password) {
      setUser({ firstName: "John" }); // Simulated user
      setShowLoginModal(false);
    } else {
      alert("Invalid username or password!");
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Handle X-ray upload
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      alert(`File uploaded: ${file.name}`);
    } else {
      alert("No file selected!");
    }
  };

  // Handle showing results
  const handleShowResults = () => {
    if (uploadedFile) {
      // Simulate fetching results from a backend/ML model
      setResult("Pneumonia detected!"); // Replace with actual logic when integrated with backend
      alert("Pneumonia detected!");
    } else {
      alert("Please upload an X-ray image first!");
    }
  };

  return (
    <div className="app-container">
      <Header
        user={user}
        onLoginClick={() => setShowLoginModal(true)}
        onCreateAccountClick={() => setShowCreateAccountModal(true)}
        onLogoutClick={handleLogout}
      />
      <main>
        <HeroSection
          user={user}
          handleUpload={handleUpload}
          handleShowResults={handleShowResults}
        />
        <div className="layout">
          <DoctorMessageSection />
          <StepsSection />
        </div>
      </main>
      {showLoginModal && (
        <LoginModal
          formData={formData}
          handleInputChange={handleInputChange}
          handleLogin={handleLogin}
          onClose={() => setShowLoginModal(false)}
        />
      )}
      {showCreateAccountModal && (
        <CreateAccountModal
          formData={formData}
          handleInputChange={handleInputChange}
          handleCreateAccount={handleCreateAccount}
          onClose={() => setShowCreateAccountModal(false)}
        />
      )}
    </div>
  );
};

export default App;
