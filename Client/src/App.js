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
  // const EMAIL = ""; //completar con los datos
  // const PASSWORD = ""; //completar con los datos
  const URL = "http://localhost:3001/rickandmorty/character";
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

//sin promesas
  // function login(userData) {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate("/home");
  //     alert(`¡Bienvenido ${userData.email}!`);
  //   } else {
  //     alert("Verifica tus datos");
  //   }
  // }

//CON ASYNC AWAIT
  const login = async (userData) => {
    const URL = "http://localhost:3001/rickandmorty/login/";
    try {
      const { email, password } = userData;
      const { data } = await axios.get(`${URL}?email=${email}&password=${password}`)
      const { access } = data;
        setAccess(access);
      access && navigate("/home");    
      alert(`¡Bienvenido ${userData.email}!`);
    } catch (error) {
      console.log(error)
      alert("Usuario no encontrado")
    }
}
  //CON PROMESAS
// function login(userData) {
//   const URL = "http://localhost:3001/rickandmorty/login/";
//   const { email, password } = userData;
//   axios(`${URL}?email=${email}&password=${password}`).then(({ data }) => {
//     const { access } = data;
//     setAccess(data);
//     access && navigate("/home");
//   });
// }
  const exit = () => {
    setAccess(false);
    navigate("/");
  };

  //ASYNC AWAIT
  
  const onSearch = async (id) => {
    try {
      const { data } = await axios.get(`${URL}/${id}`)
          if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡Opps, algo salió mal!");
        }
      } catch (error) {
      window.alert(error.message);
    }
  };

  //CON PROMESAS
  // const onSearch = (id) => {
  //   axios(`${URL}/${id}`).then(
  //     ({ data }) => {
  //       if (data.name && !characters.find((char) => char.id === data.id)) {
  //         setCharacters((oldChars) => [...oldChars, data]);
  //       } else {
  //         alert("¡Opps, algo salió mal!");
  //       }
  //     }
  //   );
  // };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== (id)));
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
