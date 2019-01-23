import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuizMain from '../src/components/AuthorQuizMain';
import * as serviceWorker from './serviceWorker';
import * as  Redux from 'redux';
import * as ReactRedux from "react-redux";
import {shuffle,sample} from 'underscore';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import AddDirectorForm from '../src/components/AddDirectorForm';


const directors = [
  {
    name: "Ridley Scott",
    image: "images/rid.jpg",
    movies: ["Gladiator"]
  },
  {
    name: "John Carpenter",
    image: "images/john.jpg",
    movies: ["They Live"]
  },
  {
    name: "John Woo",
    image: "images/woo.jpg",
    movies: [ "Hard Boiled"]
  },
  {
    name: "Christopher Nolan",
    image: "images/chris.jpg",
    movies: ["Following"]
  },
  {
    name: "James Cameron",
    image: "images/james.jpg",
    movies: [ "The Abyss"]
  }
];
//randomises the images of directors with at least one matching movie per image
function getTurnData(directors){
    const allMovies =directors.reduce(function(p,c,i){
return p.concat(c.movies);
    }, []);
    const foureRandomMovies = shuffle(allMovies).slice(0,4);
    const answer = sample(foureRandomMovies);

    return {
        movies: foureRandomMovies,
        director: directors.find((dir)=>dir.movies.some((title)=> title === answer))
    }
}


function reducer(
    state={directors, turnData: getTurnData(directors), highlight:''},
     action){
         switch(action.type){
             case 'ANSWER_SELECTED':
              const isCorrect = state.turnData.director.movies.some((movie)=> movie === action.answer);
              return Object.assign({}, state, {
                  highlight: isCorrect ? 'correct': 'wrong'
              });
              case 'CONTINUE':
              return Object.assign({}, state, {
                  highlight: '',
                  turnData: getTurnData(state.directors)
              });
              case 'ADD_AUTHOR':
              return Object.assign({}, state, {
                  directors: state.directors.concat([action.director])
              });
              default: return state;
            }
  
}

let store = Redux.createStore(
    reducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


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
 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
