const app = require("../src/app"); //aca guardamos el servidor
const session = require("supertest");
const agent = session(app); //a supertest se le pasa el servidor para que lo pueda clonar

describe("Test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            await agent.get("/rickandmorty/character/1").expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const { body } = await agent.get("/rickandmorty/character/1");
            expect(body).toHaveProperty("id");
            expect(body).toHaveProperty("name");
            expect(body).toHaveProperty("species");
            expect(body).toHaveProperty("gender");
        });
        it("Si hay un error responde con status: 500", async () => {
            const response = await agent.get("/rickandmorty/character/908");
            expect(response.statusCode).toEqual(500);
        });
    });
    describe("GET /rickandmorty/login", () => {
        it("Si validamos access, debe responder con true si las credenciales son correctas", async () => {
            const {body} = await agent.get("/rickandmorty/login/?email=laura@email.com&password=1234lau");
            expect(body.access).toBe(true)
        });
         it("Si validamos access, debe responder con false si las credenciales son incorrectas", async ()=> {
           const { body } = await agent.get("/rickandmorty/login/?email=laura@email.com&password=xxxx");
           expect(body.access).toBe(false);
         });
    });
    describe("POST /rickandmorty/fav", () => {
        const character1 = { id: 1, name: "Laura" };
        const character2 = { id: 2, name: "Simón" };
        it("Debe responder con un favorito que se envía por body y un array", async () => {
         const { body } = await agent.post("/rickandmorty/fav").send(character1)
            // expect(Array.isArray(body)); //--> ya devuelve valor booleano entonces no es necesario hacer toBe
            expect(body).toBeInstanceOf(Array); //evalua lo mismo que el otro expect
        })
        it("Debe responder con mas de un favorito que se envían por body y un array", async () => {
        const { body } = await agent.post("/rickandmorty/fav").send(character2);
            expect(body).toContainEqual(character1);
            expect(body).toContainEqual(character2);
            //como es un mismo describe te acumula los it
        });
    });
    describe("DELETE /rickandmorty/fav/:id", () => {
        const character1 = { id: 1, name: "Laura" };
        const character2 = { id: 2, name: "Simón" };
        it("Si el id no coincide, debe responder con un array de los elementos previos sin modificar",
            async () => {
                const { body } = await agent.delete("/rickandmorty/fav/3"); //los test son sucesivos, este character no fue creado en el test
                expect(body).toContainEqual(character1);
                expect(body).toContainEqual(character2);
            });
        it("Si el id coincide, se elimina correctamente el personaje", async () => {
          const { body } = await agent.delete("/rickandmorty/fav/1"); 
          expect(body).not.toContainEqual(character1);
        });
    });
});