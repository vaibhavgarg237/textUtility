import React from "react";

function TextForm(props) {
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="myBox"
          rows="3"
        ></textarea>
      </div>
      <button className="btn btn-primary">Convert to upper case</button>
    </>
  );
}

export default TextForm;
