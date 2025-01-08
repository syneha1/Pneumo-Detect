import React from "react";
import "../styles/Header.css";

const Header = ({ user, onLoginClick, onCreateAccountClick, onLogoutClick }) => {
  return (
    <header className="header">
      <div className="logo">Pneumodetect</div>
      <div className="auth-buttons">
        {user ? (
          <>
            <span className="welcome-message">Hello, {user.firstName}</span>
            <button className="logout-btn" onClick={onLogoutClick}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="login-btn" onClick={onLoginClick}>
              Login
            </button>
            <button className="create-account-btn" onClick={onCreateAccountClick}>
              Create account
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
