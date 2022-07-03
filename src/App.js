import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert";

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
    <div className="App">
      <Navbar title="textUtilsV" mode={darkMode} setMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          heading="Enter the text to analyze"
          mode={darkMode}
          showAlert={showAlert}
        />
      </div>
    </div>
  );
}

export default App;
