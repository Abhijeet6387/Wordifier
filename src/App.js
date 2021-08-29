import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Darkmode has been enabled!", "success");
      // to change the title dynamically
      // document.title = "Wordifier - Dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Darkmode has been disabled!", "success");
    }
  };
  return (
    <>
      <Navbar title="Wordifier" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container-fluid">
        <TextForm
          showAlert={showAlert}
          heading="Enter text to analyze"
          mode={mode}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
