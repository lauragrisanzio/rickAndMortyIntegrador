import Card from "../Card/Card";
import styles from "./Cards.module.css"

export default function Cards({ characters, onClose }) {
 
  return (
    <div >
      {characters.map(
        ({ id, name, species, status, origin, gender, image }) => {
          return (
            <div  className={styles.cards}>
              <Card
                key={id}
                id={id}
                image={image}
                name={name}
                species={species}
                gender={gender}
                status={status}
                origin={origin.name}
                onClose={onClose}
              />
            </div>
          );
        }
              )
      }
    </div>
  );
}

