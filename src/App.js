import React from "react";
import axios from "axios"
import Form from "./components/Form/Form.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./views/About/About.jsx"
import Detail from "./components/Detail/Detail.jsx";
import Favorites from "./components/Favorites/Favorites.jsx"
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Error404 from "./components/Error404/Error404.jsx";


function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = ""; //completar con los datos
  const PASSWORD = ""; //completar con los datos

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
      alert(`¡Bienvenido ${userData.email}!`);
    } else {
      alert("Verifica tus datos");
    }
  }

  const exit = () => {
    setAccess(false);
    navigate("/");
  };

  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡Opps, algo salió mal!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
    //filter no modifica el array original
  };
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/" && <Nav exit={exit} onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>

        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
