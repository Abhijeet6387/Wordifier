import React, { useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // const [copied, setCopied] = useState(false);
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleSpaces = () => {
    // console.log("On change");
    //regex to split the words into array and then join them with one space
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnCopy = () => {
    // setCopied(true);
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleReset = () => {
    setText("");
  };

  const handleTitleCase = () => {
    let newText = text.split(" ").map((currentValue) => {
      let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return newText;
    });
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  //text = "new text"; - wrong way to change the state
  //setText("new text"); - correct way to change the state
  return (
    <>
      <div className="container">
        <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
          <div className="container-fluid">
            <h4 className="my-3">{props.heading}</h4>
            <div className="mb-3">
              {/* <label for="myBox" className="form-label">Example textarea</label> */}
              <textarea
                className="form-control"
                value={text}
                onChange={handleOnChange}
                style={{
                  backgroundColor: props.mode === "dark" ? "#343a40" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                id="myBox"
                rows="8"
              ></textarea>
            </div>
            {/* you can add custom css if you want */}
            <button
              type="button"
              className={
                props.mode === "light"
                  ? "btn btn-outline-primary btn-sm mx-1"
                  : "btn btn-primary btn-sm mx-1"
              }
              onClick={handleUpClick}
            >
              Convert to Uppercase
            </button>
            <button
              type="button"
              className={
                props.mode === "light"
                  ? "btn btn-outline-primary btn-sm mx-1"
                  : "btn btn-primary btn-sm mx-1"
              }
              onClick={handleLoClick}
            >
              Convert to Lowercase
            </button>
            {/* <CopyToClipboard text={text} onCopy={handleOnCopy}>
          <button type="button" className="btn btn-outline-primary btn-sm mx-1">
            Copy to clipboard
          </button>
        </CopyToClipboard> */}
            <button
              type="button"
              className={
                props.mode === "light"
                  ? "btn btn-outline-primary btn-sm mx-1"
                  : "btn btn-primary btn-sm mx-1"
              }
              onClick={handleSpaces}
            >
              Remove Spaces
            </button>
            <button
              type="button"
              className={
                props.mode === "light"
                  ? "btn btn-outline-primary btn-sm mx-1"
                  : "btn btn-primary btn-sm mx-1"
              }
              onClick={handleOnCopy}
            >
              Copy Text
            </button>
            <button
              type="button"
              className={
                props.mode === "light"
                  ? "btn btn-outline-primary btn-sm mx-1"
                  : "btn btn-primary btn-sm mx-1"
              }
              onClick={handleTitleCase}
            >
              Title Case
            </button>
            <button
              type="button"
              className={
                props.mode === "light"
                  ? "btn btn-outline-primary btn-sm mx-1"
                  : "btn btn-primary btn-sm mx-1"
              }
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
          <div className="container-fluid my-3">
            <h4>Text Summary</h4>
            <p>
              {text.split(" ").length} words and {text.length} characters
            </p>
            <p>
              Estimated time to read :{" "}
              {Math.round(text.split(" ").length * 0.008)} minutes
            </p>
            <h4>Preview</h4>
            <p>
              {text.length > 0 ? text : "Enter your text to preview it here!"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
