import React, { useState } from "react";
import "./styles/App.css";

const App = () => {
  const [user, setUser] = useState(null); // Manage logged-in user
  const [showLoginModal, setShowLoginModal] = useState(false); // Toggle login modal
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false); // Toggle create account modal
  const [formData, setFormData] = useState({}); // Form data for login and create account
  const [registeredUsers, setRegisteredUsers] = useState([]); // Store registered users

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle create account functionality
  const handleCreateAccount = () => {
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.username &&
      formData.password
    ) {
      const newUser = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        username: formData.username,
        password: formData.password,
      };
      setRegisteredUsers([...registeredUsers, newUser]); // Store the new user
      alert("Account created successfully!");
      setShowCreateAccountModal(false);
      setFormData({});
    } else {
      alert("Please fill out all fields!");
    }
  };

  // Handle login functionality
  const handleLogin = () => {
    const matchedUser = registeredUsers.find(
      (u) =>
        u.username === formData.username && u.password === formData.password
    );

    if (matchedUser) {
      setUser(matchedUser);
      alert(`Welcome back, ${matchedUser.firstName}!`);
      setShowLoginModal(false);
      setFormData({});
    } else {
      alert("Invalid username or password!");
    }
  };

  // Handle logout functionality
  const handleLogout = () => {
    setUser(null);
  };

  // Handle X-ray upload
  const handleUpload = (event) => {
    const file = event.target.files[0]; // Get the uploaded file
    if (file) {
      alert(`File uploaded: ${file.name}`);
      // Add additional logic to send the file to a server or process it
    } else {
      alert("No file selected!");
    }
  };

  // Handle show results
  const handleShowResults = () => {
    alert("Showing results...");
    // Replace with logic to fetch results from a backend API
  };

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Pneumodetect</div>
        <div className="auth-buttons">
          {user ? (
            <>
              <span className="welcome-message">Hello, {user.firstName}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="login-btn"
                onClick={() => setShowLoginModal(true)}
              >
                Login
              </button>
              <button
                className="create-account-btn"
                onClick={() => setShowCreateAccountModal(true)}
              >
                Create account
              </button>
            </>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <div className="hero-section">
          <div className="hero-text">
            {user ? (
              <>
                <h1>GET YOUR XRAY CHECKED</h1>
                <p>Upload your X-ray to check for pneumonia with AI assistance</p>
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
              <div className="hero-text">
                <h1>Get your X-ray checked through our</h1>
                <div className="highlight-box">PneumoDetect</div>
              </div>
            )}
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
                <li>Uploaded image has X-ray on it.</li>
                <li>The image is not blurry.</li>
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

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Login</h2>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => setShowLoginModal(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Create Account Modal */}
      {showCreateAccountModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Create Account</h2>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
            <button onClick={handleCreateAccount}>Create Account</button>
            <button onClick={() => setShowCreateAccountModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
