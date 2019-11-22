import React from "react";
import "../css/App.module.css";

export const Movies = ({ title, onClick }) => {
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
};
export default Movies;
