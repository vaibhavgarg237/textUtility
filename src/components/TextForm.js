import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("default value");

  const count = (txt) => {
    let c = 0;
    txt.split(" ").map((item) => {
      return item ? c++ : c;
    });
    return c;
  };

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
          className="btn btn-primary mx-1"
          onClick={() => {
            setText(text.toLocaleUpperCase());
            props.showAlert("Converted to upper case", "success");
          }}
        >
          Convert to upper case
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={() => {
            setText(text.toLocaleLowerCase());
            props.showAlert("Converted to lower case", "success");
          }}
        >
          Convert to lower case
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={() => {
            setText("");
            props.showAlert("Clear Text", "success");
          }}
        >
          Clear Text
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
