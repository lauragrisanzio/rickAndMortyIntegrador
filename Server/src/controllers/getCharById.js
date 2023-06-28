const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character"

//res --> objeto que representa a la respuesta - del servidor // obj que necesita para enviar la rta del servidor
//response --> la respuesta que obtenemos de la peticion - resultado de la promesa

//CON ASYNC AWAIT
const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}/${id}`); //se hace destructuring de la data de response
    const { status, name, species, origin, image, gender, error } = data;
    const character = { id, status, name, species, origin, image, gender };
    return name ?
      res.json(character) : res.status(404).json({ message: error });
    
  } catch (reason) {
    return res.status(500).json({ message: reason });
     
  }
}
   
    
//CON EXPRESS
// const getCharById = (req, res) => {
// //aca le pasamos la ruta (los : se los pasamos a las rutas en front para especificar que ese valor va a ir cambiando)
//   const {id} = req.params  
//   axios.get(`${URL}/${id}`)
//     .then(({ data }) => {
//       const { id, status, name, species, origin, image, gender, error } = data
//       const character = { id, status, name, species, origin, image, gender }
//       return name ?
//         res.json(character) : res.status(404).json({ message: error });
//     })
//     .catch((reason) => {
//       return res.status(500).json({message: reason})
//     }); //son por defecto GET
// }

//SIN EXPRESS
// const successHandler = (response, res) => {
//   const { id, gender, name, species, origin, image, status } = response.data;
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ id, gender, name, species, origin, status ,image }));
// };

// const errorHandler = (error, res) => {
//   res.writeHead(500, { "Content-Type": "text/plain" })
//   res.end(error.message)
  
// }

// const getCharById = (res, id) => { 
//   //aca le pasamos la ruta (los : se los pasamos a las rutas en front para especificar que ese valor va a ir cambiando)
//     axios.get(`${URL}/${id}`) //son por defecto GET
//         .then((response) => successHandler(response,res))
//       .catch((error) => errorHandler(error))
    
// }
// getCharById(null, 1)

module.exports = getCharById
