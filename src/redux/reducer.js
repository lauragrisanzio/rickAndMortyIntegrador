import {ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters:[],
};


const rootReducer = (state=initialState, action) => {
switch (action.type) {
  case ADD_FAV:
    return {
      ...state,
      allCharacters: [...state.allCharacters, action.payload],
      myFavorites: [...state.allCharacters, action.payload], //al ser un array copiamos todo lo que hay en el array + el nvo personaje
    };
  case REMOVE_FAV:
    return {
      ...state,
      myFavorites: state.myFavorites.filter(
        (char) => char.id !== action.payload
      ),
    };
  case FILTER:
   
    return {
      ...state,
      myFavorites: state.allCharacters.filter((char) => char.gender===action.payload), 
    };
    
  case ORDER:
    const order = [...state.allCharacters].sort((a, b) => {
      if (action.payload === "A") {
        return a.id > b.id ? 1 : -1
      } else {
        return a.id < b.id ? 1 : -1;
      }
    })
    return {
      ...state,
      myFavorites: order
    };
  
  default:
    return {
      ...state,
    };
}
};

export default rootReducer;