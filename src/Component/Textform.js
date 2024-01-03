import React, { useState } from "react";

export const Textform = (props) => {
  const handleUpCase = () => {
    console.log("Upper case clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowCase = () => {
    // console.log("Lower case clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("ON change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Your Text Here");
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Text Area
        </label>
        <textarea
          className="form-control my-3"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="10"
        ></textarea>
        <div>
          <button className="btn btn-primary my-3 " onClick={handleUpCase}>
            Convert To UPPER CASE
          </button>
        </div>
        <div>
          <button className="btn btn-primary my-3" onClick={handleLowCase}>
            Convert To lower case
          </button>
        </div>
      </div>
    </>
  );
};
