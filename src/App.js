import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./Component/Navbar";
import { Textform } from "./Component/Textform";
import { useState } from "react";
import { Alert } from "./Component/Alert";
// import { About } from "./Component/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar title="Text Calculator" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <About /> */}
        <Textform
          heading="Enter the text to analyse"
          showAlert={showAlert}
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
