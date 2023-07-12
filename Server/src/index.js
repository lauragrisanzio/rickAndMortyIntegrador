const { conn } = require("./DB_connection");
const server = require("./app");
// // require("dotenv").config();
// const express = require("express");
// // const {PORT} = process.env;
// const router = require("./routes/index(routes)")

// const server = express();
const PORT = 3001;

// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//     next();
//   });

// server.use(express.json());
// server.use("/rickandmorty", router);

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
  });
})
  .catch((err) => console.log(err));
