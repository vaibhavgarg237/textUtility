import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(`light`);
  const [alert, setAlert] = useState("null");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("null");
    }, 1500);
  };

  function toggleMode() {
    if (darkMode === `light`) {
      setDarkMode(`dark`);
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode toggled", "success");
    } else {
      setDarkMode(`light`);
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode toggled to light", "danger");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="textUtilsV" mode={darkMode} setMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze"
                  mode={darkMode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
