const { Favorite } = require("../DB_connection");

const deleteFavs = async (req, res) => {
    const { id } = req.params;
    try {
        // const favorite = await Favorite.findByPk(id);
        // if (!character) throw Error("No existe el personaje que desea eliminar");
        // await favorite.destroy()
        await Favorite.destroy({ where: { id: id } });
        const favorites = await Favorite.findAll();
        return res.status(200).json(favorites);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = deleteFavs;
