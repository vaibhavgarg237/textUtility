import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("default value");

  return (
    <>
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
        ></textarea>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          //change text to upper case
          setText(text.toLocaleUpperCase());
        }}
      >
        Convert to upper case
      </button>
    </>
  );
}

export default TextForm;
