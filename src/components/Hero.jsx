import React from 'react';
import { useState } from "react";


function Hero({ score }) {
  const [name, setName] = useState("");

  const onChange = event => {

    if (event.target.name === "name") setName(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
  };

  return (
  <>
      <div className="row">
        <div className="jumbotron col-10 offset-1">
          <form onSubmit={onSubmit}>
            <input
            style={{height: '40px', }}
              type="text"
              name="name"
              placeholder="Your name here ..."
              onChange={onChange}
            />
            {/* <input type="button" value="Submit" /> */}
            <h1 style={{ float: "center" }}>Movie Quiz</h1>
            <h2>Select the Movie by director</h2>
            <hr/>
            <p><strong style={{fontWeight: 'bold'}}>Name: { ' ' } {name}</strong></p>
            {/* <p>Score: {score}</p> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default Hero;
