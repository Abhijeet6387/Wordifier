import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      {/* since it will be difficult to deploy routes based react apps on github thus about has be commented */}
      {/* <Router> */}
      <Navbar title="Wordifier" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container-fluid">
        {/* <Switch>
            {/* exact path is used because react does partial matching for example in 
            /user -> Component1
            /user/home -> Component2 */}
        {/* <Route exact path="/about">
              <About />
            </Route> */}
        {/* <Route exact path="/"> */}
        <TextForm
          showAlert={showAlert}
          heading="Wordifier - Word Counter, Character Counter, Remove Extra Spaces"
          mode={mode}
        />
        {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
