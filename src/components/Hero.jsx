import React from "react";
import H from "../css/Hero.module.css";
export const Hero = () => {
  return (
    <>
      <div className="row">
        <div className="jumbotron col-10 offset-1">
          <h1 className={H.h1}>Movie Quiz</h1>
          <h2 className={H.h2}>Select the Movie by director</h2>
          <hr />
        </div>
      </div>
    </>
  );
};
