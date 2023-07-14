const { User } = require("../DB_connection"); //desde allí está activo dentro de tu base de datos
//en db_connection el modelo ya tiene la instacia de sequelize

//es una funcion de request:
const postUser = async (req, res) => {
    //try/catch para evitar errores en el servidor
    try {
        const { email, password } = req.body
        if (!email || !password) return res.status(400).send("Faltan datos");
    
        // const newUser = await User.create({
        //     email, password
        // })
        const newUser = await User.findOrCreate({
            where:{email:email, password:password}
        })
        res.status(200).json(newUser)
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }

};

module.exports = postUser;

//findOrCreate: si lo encuentro lo devuelvo, si no lo encuentro lo creo