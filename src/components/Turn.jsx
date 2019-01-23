import React from "react";
import PropTypes from "prop-types";
import "../../src/App.css";

import Movies from "./Movies";

function Turn({ movies, director, highlight, onAnswerSelected }) {
  function highlightToBgColor(highlight) {
    const mapping = {
      none: "",
      correct: "green",
      wrong: "red"
    };
    return mapping[highlight];
  }
  return (
    <div
      className="row turn" style={{ backgroundColor: highlightToBgColor(highlight) }}>
      <div className="col-4 offset-1">
        <img
          style={{ height: "400px", float: 'left', padding: '50px 20px 20px 50px' }}
          src={director.image}
          className="movieDirector"
          alt="Director"/>
      </div>

      <div className="col-6" >
        {movies.map((title) => (
          <Movies title={title} key={title} onClick={onAnswerSelected} />
        ))}
      </div>
    </div>
  );
}



    Turn.propTypes = { director: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
        movies: PropTypes.arrayOf(PropTypes.string).isRequired
      }), onAnswerSelected: PropTypes.func.isRequired, highlight: PropTypes.string.isRequired };
export default Turn;
