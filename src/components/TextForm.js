import React, { useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // const [copied, setCopied] = useState(false);
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const handleSpaces = () => {
    // console.log("On change");
    //regex to split the words into array and then join them with one space
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Whitespaces have been removed!", "success");
  };

  const handleOnCopy = () => {
    // setCopied(true);
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleReset = () => {
    setText("");
    props.showAlert("Cleared!", "success");
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
                  ? "btn btn-outline-primary btn-sm mx-1 my-1"
                  : "btn btn-primary btn-sm mx-1 my-1"
              }
              onClick={handleUpClick}
            >
              Convert to Uppercase
            </button>
            <button
              type="button"
              className={
                props.mode === "light"
                  ? "btn btn-outline-primary btn-sm mx-1 my-1"
                  : "btn btn-primary btn-sm mx-1 my-1"
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
                  ? "btn btn-outline-primary btn-sm mx-1 my-1"
                  : "btn btn-primary btn-sm mx-1 my-1"
              }
              onClick={handleSpaces}
            >
              Remove Spaces
            </button>
            <button
              type="button"
              className={
                props.mode === "light"
                  ? "btn btn-outline-primary btn-sm mx-1 my-1"
                  : "btn btn-primary btn-sm mx-1 my-1"
              }
              onClick={handleOnCopy}
            >
              Copy Text
            </button>

            <button
              type="button"
              className={
                props.mode === "light"
                  ? "btn btn-outline-primary btn-sm mx-1 my-1"
                  : "btn btn-primary btn-sm mx-1 my-1"
              }
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
          <div className="container-fluid my-3">
            <h4>Text Summary</h4>
            <p>
              {
                // filter method to remove the 0 word bug
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
              words and {text.length} characters
            </p>
            <p>
              Estimated time to read :{" "}
              {Math.round(text.split(" ").length * 0.008)} minutes
            </p>
            <h4>Preview</h4>
            <p>
              {text.length > 0
                ? text
                : "Wordifier gives you a way to analyze your text quickly and efficiently. It is a free web tool that provides an instant word & character count. It includes features such as converting to upper and lower cases, removing witespaces etc."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
