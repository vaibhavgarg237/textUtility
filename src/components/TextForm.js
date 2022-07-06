import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("default value");

  const count = (txt) => {
    // let c = 0;
    // txt.split(" ").map((item) => {
    //   return item ? c++ : c;
    // });
    // return c;
    return txt.split(" ").filter((el) => el !== 0).length;
  };

  function toUpper() {
    setText(text.toLocaleUpperCase());
    props.showAlert("Converted to upper case", "success");
  }

  function toLowerCase() {
    setText(text.toLocaleLowerCase());
    props.showAlert("Converted to lower case", "success");
  }

  function handleCopy() {
    document.getElementById("myBox").select();
    navigator.clipboard.writeText(text);
    document.getSelection.removeAllRanges();
    props.showAlert("Copy Text", "success");
  }

  function clearText() {
    setText("");
    props.showAlert("Clear Text", "success");
  }

  function removeExtraSpaces() {
    let str = "";
    text.split(" ").map((item) => {
      if (item) {
        str = str + " " + item;
      }
      return str;
    });
    setText(str);
    props.showAlert("Remove extra spaces", "success");
  }

  return (
    <div
      style={{
        color: `${props.mode === `dark` ? `white` : `black`}`,
      }}
    >
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="myBox"
            rows="3"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
            style={{
              backgroundColor: `${props.mode === `dark` ? `#042743` : `white`}`,
              color: `${props.mode === `dark` ? `white` : `black`}`,
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={toUpper}
        >
          Convert to upper case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={toLowerCase}
        >
          Convert to lower case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={removeExtraSpaces}
        >
          Remove extra spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {count(text)}
          Words, {text.length} letters
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview it here"}</p>
      </div>
    </div>
  );
}

export default TextForm;
