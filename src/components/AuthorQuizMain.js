import React from "react";

import "../css/App.module.css";
import { Hero } from "./Hero";
import { Movies } from "./Movies";
import { Turn } from "./Turn";
import { Continue } from "./Continue";
import { Footer } from "./Footer";
import { connect } from "react-redux";

import { Link } from "react-browser-router";

function mapStateToProps({ turnData, highlight }) {
  return {
    turnData,
    highlight
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAnswerSelected: answer => {
      dispatch({ type: "ANSWER_SELECTED", answer });
    },
    onContinue: () => {
      dispatch({ type: "CONTINUE" });
    }
  };
}

const AuthorQuizMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(function({ turnData, highlight, title, onAnswerSelected, onContinue }) {
  return (
    <div className="container-fluid">
      <Hero />

      <Turn
        {...turnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      <Movies onClick={title} />
      <Continue show={highlight === "correct"} onContinue={onContinue} />
      <h3>
        <Link to="/add">Add a Director></Link>{" "}
      </h3>
      <Footer />
    </div>
  );
});

export default AuthorQuizMain;
