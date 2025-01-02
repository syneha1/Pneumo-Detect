import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Guidelines from "./components/Guidelines";
import Steps from "./components/Steps";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Main />
      <div className="content-wrapper">
        <Guidelines />
        <Steps />
      </div>
    </div>
  );
};

export default App;
