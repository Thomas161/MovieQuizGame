import React from "react";
import "../../src/App.css";


function Movies({ title, onClick }) {
  return (
    <div
      className="answer"
      onClick={() => {
        onClick(title);
      }}
    >
      <h4>{title}</h4>
    </div>
  );
}
export default Movies;
