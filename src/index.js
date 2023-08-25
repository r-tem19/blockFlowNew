import React from "react";
import ReactDOM from "react-dom";
import MainLayout from "./Layout/MainLayout";
import "./styles/globals.scss";

function App() {
  return (
    <div className="App">
      <MainLayout />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
