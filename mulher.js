const porta = 3333;
const express = require("express");
const app = express();
const router = express.Router();

    function mostraMulher(request, response) {
        response.json({
            nome: 'Duda Soares',
            imagem: 'https://media.licdn.com/dms/image/D4D03AQE5v72B3eOKPQ/profile-displayphoto-shrink_200_200/0/1680632598050?e=1687996800&v=beta&t=BFBKtm9FrHIiqqLxB-KEUQTbBrUvBHLlyne1U-vWdfQ',
            minibio: 'Futura Dev'
        });
    }

    function mostraPorta() {
        console.log("Servidor criado e rodando na porta", porta);
    }

app.use(router.get('/mulher', mostraMulher));
app.listen(porta, mostraPorta);