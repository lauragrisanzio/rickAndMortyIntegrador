const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
    const { name, origin, status, image, species, gender } = req.body;
    try {
       if (!name || !origin || !status || !image || !species || !gender) return res.status(402).send("Faltan datos");
    
     await Favorite.findOrCreate({
       where: { name, origin, status, image, species, gender,}
     });
    
        const favs = await Favorite.findAll()
        return res.status(200).json(favs)
        
    } catch (error) {
       res.status(500).json({ error: error.message }); 
    }
};

module.exports = postFav;