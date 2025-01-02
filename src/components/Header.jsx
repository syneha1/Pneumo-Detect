import React from "react";
import "./../styles/Header.css"; // We'll create this CSS file next

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Pneumodetect</div>
      <nav>
        <button className="login-btn">Login</button>
        <button className="create-btn">Create account</button>
      </nav>
    </header>
  );
};

export default Header;
