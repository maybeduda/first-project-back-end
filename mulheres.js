const porta = 3333;
const express = require("express");
const app = express();
const router = express.Router();

const mulheres = [
    {
        nome: 'Duda Soares',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQE5v72B3eOKPQ/profile-displayphoto-shrink_200_200/0/1680632598050?e=1687996800&v=beta&t=BFBKtm9FrHIiqqLxB-KEUQTbBrUvBHLlyne1U-vWdfQ',
        minibio: 'Futura Dev'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://media.licdn.com/dms/image/C4D03AQE-aD7nj2W_0Q/profile-displayphoto-shrink_800_800/0/1563383651406?e=2147483647&v=beta&t=q65Pubo5FqXxPYUI81nfsp6vcAnv5Ybz5EJjR5AGBLo',
        minibio: 'Fundadora progaMaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://media.licdn.com/dms/image/C4D03AQE-aD7nj2W_0Q/profile-displayphoto-shrink_800_800/0/1563383651406?e=2147483647&v=beta&t=q65Pubo5FqXxPYUI81nfsp6vcAnv5Ybz5EJjR5AGBLo',
        minibio: 'Hacker antirracista'
    }
]

    function mostraMulheres(request, response){
        response.json(mulheres);
    }

    function mostraPorta() {
        console.log("Servidor criado e rodando na porta", porta);
    }
app.use(router.get('/mulheres', mostraMulheres));
app.listen(porta, mostraPorta);