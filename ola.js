const porta = 3333;
const express = require("express");
const app = express();
const router = express.Router();

    function mostraOla(request, response) {
        response.send("Olá, mundo!");
    }

    function mostraPorta() {
        console.log("Servidor criado e rodando na porta", porta);
    }

app.use(router.get('/ola', mostraOla));
app.listen(porta, mostraPorta);