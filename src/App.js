import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./Component/Navbar";
import { Textform } from "./Component/Textform";

function App() {
  return (
    <>
      <Navbar title="Text Calculator" />
      <div className="container my-3">
        <Textform heading="Enter the text to analyse" />
      </div>
    </>
  );
}

export default App;
