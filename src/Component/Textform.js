import React, { useState } from "react";

export const Textform = (props) => {
  const handleUpCase = () => {
    console.log("Upper case clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper Case", "success");
  };
  const handleLowCase = () => {
    // console.log("Lower case clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lower Case", "success");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text area cleared", "success");
  };
  const handleOnChange = (event) => {
    // console.log("ON change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Text Area
          </label>
          <textarea
            className="form-control my-3"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="10"
            placeholder="Enter Your Text Here"
          ></textarea>
          <div>
            <button
              className="btn btn-primary my-3 mx-2"
              onClick={handleUpCase}
            >
              Convert To UPPER CASE
            </button>
            <button
              className="btn btn-primary my-3 mx-2"
              onClick={handleLowCase}
            >
              Convert To lower case
            </button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleClear}>
              Clear Text
            </button>
            {/* start: from here till the comment which says ends here is an option to convert to dark mode for mobile devices */}
            <div
              className={`form-check form-switch mx-2 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
            {/* Ends Here: Remove this when not required any more */}
          </div>
        </div>

        <div className="container my-3">
          <h2>Your Text Summary</h2>
          {text.split(" ").length} words and {text.length} characters
          <p>
            {0.008 * text.split(" ").length} minutes to read the writen text
          </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter Your Text To Preview Here"}</p>
        </div>
      </div>
    </>
  );
};
