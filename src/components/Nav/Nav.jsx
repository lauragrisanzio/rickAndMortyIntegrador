import React from "react"
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom"


export default function Nav({onSearch, exit}) {
 
    return (
      <div className={styles.containerNav}>
        <Link to={"/about"}>
          <button>About</button>
        </Link>
        <Link to={"/home"}>
          <button>Home</button>
        </Link>
        <Link to={"/favorites"}>
          <button>Favorites</button>
        </Link>
        
        <SearchBar onSearch={onSearch} />

        <button onClick={exit}>Exit</button>
      </div>
    );
    
}


//  <SearchBar onSearch={(characterID) => window.alert(characterID)} />;