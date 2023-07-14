const { User } = require("../DB_connection");

//la informacion esta dentro de la base de datos
const login = async (req, res) => {
    const { email, password } = req.query;   //¿Como vamos a recibir por query datos sensibles???!!!
    try {
        if (!email || !password) return res.status(400).send( "Faltan datos" );
       
        const user = await User.findOne({
            where:{email:email}
        })
        if (!email) return res.status(404).send("Usuario no encontrado");
        return user.password === password ?
            res.status(200).json({ access: true }) :
            res.status(403).send("Contraseña incorrecta");

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

module.exports = login;