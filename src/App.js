import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";

function App() {
  const [darkMode, setDarkMode] = useState(`light`);

  function handleSet() {
    if (darkMode === `light`) {
      setDarkMode(`dark`);
      document.body.style.backgroundColor = "#042743";
    } else {
      setDarkMode(`light`);
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <div className="App">
      <Navbar title="textUtilsV" mode={darkMode} setMode={handleSet} />
      <div className="container">
        <TextForm heading="Enter the text to analyze" mode={darkMode} />
      </div>
    </div>
  );
}

export default App;
