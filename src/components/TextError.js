import React from "react";

function TextError(props) {
  return (
    <span className="absolute left-4 top-16 text-red-700 mt-1 ">
      {props.children}
    </span>
  );
}

export default TextError;
