import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER"
export const ORDER = "ORDER"

//con async await:
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
 try {
   return async (dispatch) => {
     const {data} = await axios.post(endpoint, character)
       return dispatch({
         type: ADD_FAV,
         payload: data,
       });
     
   };
  
 } catch (error) {
  console.log(error)
 }
};

//con promesas:
// export const addFav = (character) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav";
//   return (dispatch) => {
//     axios.post(endpoint, character).then(({ data }) => {
//       return dispatch({
//         type: "ADD_FAV",
//         payload: data,
//       });
//     });
//   };
// };

//sin promesas:
// export const addFav = (character) => {
//     return {
//         type: ADD_FAV,
//         payload: character
//     }
// };

//con async await:
export const removeFav = (id) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    return async (dispatch) => {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    }
    } catch (error) {
      console.log(error);
    }
  }
//con promesas:
// export const removeFav = (id) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
//   return (dispatch) => {
//     axios.delete(endpoint).then(({ data }) => {
//       return dispatch({
//         type: "REMOVE_FAV",
//         payload: data,
//       });
//     });
//   };
// };

//sin promesas
// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id
//     };
// };


export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }

}
