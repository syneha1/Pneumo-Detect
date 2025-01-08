import React from "react"; // Import React once
import ReactDOM from "react-dom/client"; // Import ReactDOM for React 18+
import "./styles/global.css"; // Import global styles
import App from "./App"; // Import App component

// Create the root and render the App component
const root = ReactDOM.createRoot(document.getElementById("root")); // Match "root" with index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

