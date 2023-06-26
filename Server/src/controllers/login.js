const users = require("../utils/users")

const login = (req, res) => {
    const { email, password } = req.query;

    // const user = users.filter(log => log.email === email && log.password === password)

    // if (user) {
    //     return res.status(200).json({access: true})
    // }
    // res.status(400).json({access:false})
//otra opcion - es mas optima porque uno no debe devolver nada, solo verificar si existe o no el usuario
    users.forEach(user => {
        if (user.email === email && user.password === password) { return res.status(200).json({ access: true }); };
    });
    return res.status(400).json({ access: false });
      
};

module.exports = login