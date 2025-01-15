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
      // TODO: Replace this alert with a backend API call to register the user
      alert("Account created successfully!");
      setShowCreateAccountModal(false);
      setFormData({});
    } else {
      alert("Please fill out all fields!");
    }
  };

  const handleLogin = () => {
    if (formData.username && formData.password) {
      // TODO: Replace this with a backend API call for user authentication
      setUser({ firstName: formData.username }); // Dummy login with the username
      setShowLoginModal(false);
      setFormData({}); // Clear the form data
    } else {
      alert("Invalid username or password!");
    }
  };

  const handleLogout = () => {
    setUser(null);
    // TODO: Optionally clear tokens or session data stored locally
  };

  // Handle X-ray upload
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      // TODO: Replace this alert with a backend API call to upload the file
      alert(`File uploaded: ${file.name}`);
    } else {
      alert("No file selected!");
    }
  };

  // Handle showing results
  const handleShowResults = () => {
    if (uploadedFile) {
      // TODO: Replace this dummy result with a backend API call to fetch the analysis result
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
