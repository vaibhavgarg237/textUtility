import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";

function App() {
  return (
    <div className="App">
      <Navbar title="textUtilsV" />
      <div className="container">
        <TextForm />
      </div>
    </div>
  );
}

export default App;
