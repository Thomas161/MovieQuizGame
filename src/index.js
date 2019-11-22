import React from "react";
import ReactDOM from "react-dom";
import AuthorQuizMain from "../src/components/AuthorQuizMain";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import AddDirectorForm from "../src/components/AddDirectorForm";
import { reducer } from "./reducer/index";

let store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Router>
    <ReactRedux.Provider store={store}>
      <React.Fragment>
        <Route exact path="/" component={AuthorQuizMain} />
        <Route path="/add" component={AddDirectorForm} />
      </React.Fragment>
    </ReactRedux.Provider>
  </Router>,
  document.getElementById("root")
);
