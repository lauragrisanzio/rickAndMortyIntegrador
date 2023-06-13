var http = require("http");
const data = require("./utils/data")
const PORT = 3001;

http
    .createServer((req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const { url } = req;
      
        if (url.includes("/rickandmorty/character")) {
            let id = Number(url.split("/").at(-1));
            const personaje = data.find((personaje) => personaje.id === id);
          if (personaje) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(personaje));
        } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Character not found" }));
        }
    } else {
      res.writeHead(403, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
    }
  }).listen(PORT, "localhost");