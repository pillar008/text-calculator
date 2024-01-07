import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./Component/Navbar";
import { Textform } from "./Component/Textform";
import { useState } from "react";
// import { About } from "./Component/About";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="Text Calculator" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        {/* <About /> */}
        <Textform heading="Enter the text to analyse" mode={mode} />
      </div>
    </>
  );
}

export default App;
