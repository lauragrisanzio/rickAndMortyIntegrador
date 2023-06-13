// import Nav from "../Nav/Nav";
import { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("")

  const handleChange = (event) => {
    setId(event.target.value)      //event.target=input y value=lo que esta escrito en el input
  }
   return (
   <div>
     <input
       type="search"
         placeholder="Escribe el ID de tu personaje"
         onChange={handleChange}
         value={id}
     />
    <button
     className={styles.botonSearch}
    onClick={() => { onSearch(id) }}>            
     Agregar
   </button>
     </div>
   );

}

// onClick={() => { onSearch(id); }}> esto es asi para que la fx de cb ejecute onsearch
//y permite que no se ejecute inmediatamente la fx