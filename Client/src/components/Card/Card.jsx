import { Link } from "react-router-dom";
import styles from "./Card.module.css"
import { useState, useEffect } from "react";
import {connect} from "react-redux"
import {addFav, removeFav} from "../../redux/actions"


function Card({ id, name, species, status, gender, image, origin, onClose, addFav, removeFav,
myFavorites}) {
   
  const [isFav, setIsFav] = useState(false)
  
  const handleFavorite = () => {
    if (isFav) {
        setIsFav(false);
        removeFav(id)
    };    
    if (!isFav) {
      setIsFav(true);
      addFav({ id, name, species, status, gender, image, origin, onClose });
    } ;
  }
  
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.grid}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>😶</button>
      )}
      <div className={styles.card}>
        <button onClick={() => onClose(id)} className={styles.close} >
          Close
        </button>

        <img src={image} alt="" />
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
        <h2>{species}</h2>
        <h2>{status}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
}

const mapStateToProps = (state) => {
  return { 
    myFavorites: state.myFavorites
  }

}

export default connect (mapStateToProps, mapDispatchToProps) (Card);
