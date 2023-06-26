let myFavorites = []; //acá simulamos la base de datos

const postFav = (req, res) => {
    // const { characther } = req.body
    
    // myFavorites.push(characther)
    myFavorites.push(req.body)
    return res.status(200).json(myFavorites)
};

const deleteFav = (req, res) => {
    const { id } = req.params
    
    // const deleteChar = myFavorites.filter(fav => parseInt(fav.id) !== parseInt(id))
    const deleteChar = myFavorites.filter(fav => Number(fav.id) !== Number(id))
    myFavorites = deleteChar; //es asi porque despues de borrar y solicitar de nuevo los favoritos, es necesario mostrar todos los que no fueron eliminados
    
    return res.status(200).json(myFavorites)
};

module.exports = {postFav, deleteFav}