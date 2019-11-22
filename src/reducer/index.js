// import { getTurnData, directors } from "./functions";
import { CONTINUE, ADD_AUTHOR, ANSWER_SELECTED } from "../actions";
//import { shuffle } from "shuffle-array";
import { sample } from "shuffle-array";
import { reduce } from "array-reduce";
//import { directors } from "../directors/directors.js";

// console.log("Shuffle ...", shuffle); //undefined

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
    movies: ["Hard Boiled"]
  },
  {
    name: "Christopher Nolan",
    image: "images/chris.jpg",
    movies: ["Following"]
  },
  {
    name: "James Cameron",
    image: "images/james.jpg",
    movies: ["The Abyss"]
  }
];
console.log(directors);

//randomises the images of directors with at least one matching movie per image
function getTurnData(directors) {
  const allMovies = directors.reduce((p, c) => p.concat(c.movies), []);
  //   console.log(shuffle);
  const fourRandomMovies =
    allMovies[
      Math.floor(allMovies.length * Math.random())
        .toString()
        .slice(0, 4)
    ];
  //const sliceArray =  Math.random([allMovies] - 1);
  console.log("RandomMovie is ... ", fourRandomMovies);
  const answer = sample(fourRandomMovies);
  console.log(answer);
  return {
    movies: fourRandomMovies,
    director: directors.find(dir => dir.movies.some(title => title === answer))
  };
}
const initState = {
  directors,
  turnData: getTurnData(directors),
  highlight: ""
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ANSWER_SELECTED:
      const isCorrect = state.turnData.director.movies.some(
        movie => movie === action.answer
      );
      return {
        state,
        highlight: isCorrect ? "correct" : "wrong"
      };
    case CONTINUE:
      return {
        ...state,
        highlight: "",
        turnData: getTurnData(state.directors)
      };
    case ADD_AUTHOR:
      const newState = {
        ...state,
        directors: state.directors.concat([action.director])
      };
      return newState;
    default:
      return state;
  }
};
