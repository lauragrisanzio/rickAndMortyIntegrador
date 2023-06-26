//siempre se importa primero lo que sea externo y luego lo que este en la carperta
const express = require("express")
const router = express.Router()
//tambien de esta forma:
// const router = require("express").Router

const server = require("express")
const getCharById = require("../controllers/getCharById");
const {deleteFav, postFav} = require("../controllers/handleFavorites");
// const handleFavorites = require("../controllers/handleFavorites")
const login = require("../controllers/login");


//en cada ruta se ejecuta un controlador

//al indicar las rutas el id va a ser dinamico por eso con : 
router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);


module.exports = router