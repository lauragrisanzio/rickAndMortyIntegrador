import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";

const Favorites = () => {

  const [aux, setAux] = useState(false)

  const dispatch = useDispatch()
  
  const favorites = useSelector(state => state.myFavorites); //= a mapStateToProps, me traigo la info del estado global
  
  const handleOrder = (event) => {
    setAux(!aux)
    dispatch(orderCards(event.target.value))  
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }
  
  return (
    <div>
      <select name="order" autoFocus onChange={handleOrder}>
        <option value="" selected>
          Ordena:
        </option>
        <option value="A">Ascendente</option>
        <option value="B">Descendente</option>
      </select>
      <select name="filter" onChange={handleFilter}>
        <option value="" selected>
          Filtra:
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknow">Unknow</option>
        <option value="Fav">Todos Favoritos</option>
      </select>
      {favorites.map(({ id, name, species, status, origin, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            image={image}
            name={name}
            species={species}
            gender={gender}
            status={status}
            origin={origin.name}
          />
        );
      })}
    </div>
  );
};


export default Favorites;