const porta = 3333;//criando a porta
const express = require("express"); //iniciando o express
const app = express();//iniciando o app
const router = express.Router();//configurando a primeira parte da rota
const cors = require("cors")//trazendo pacote cors que permite a API no front
app.use(express.json());
app.use(cors());
const conectaBancoDeDados = require('./bancoDeDados');//ligando ao arquivo banco de dados
conectaBancoDeDados()//chamando a função que conecta o banco de dados
const Mulher = require('./mulherModel');
//GET
    async function mostraMulheres(request, response){
        try {
            const mulheresVindas = await Mulher.find()
            response.json(mulheresVindas)
        }catch (erro){
            console.log(erro)

        }
    }

//post
    async function criaMulher(request, response) {
        const novaMulher = new Mulher ({
            nome: request.body.nome,
            imagem: request.body.imagem,
            minibio: request.body.minibio,
            citacao: request.body.citacao
        })

        try {
            const mulherCriada = await novaMulher.save()
            response.status(201).json(mulherCriada);
        } catch (erro) {
            console.log(erro)
        }
    }

//patch
    async function corrigeMulher(request, response) {
        try {
                const mulherEncontrada = await Mulher.findById(request.params.id)
            
                if (request.body.nome) {
                    mulherEncontrada.nome = request.body.nome
                }
                if (request.body.minibio) {
                    mulherEncontrada.minibio = request.body.minibio
                }
                if (request.body.imagem) {
                    mulherEncontrada.imagem = request.body.imagem
                }
                if(request.body.citacao) {
                    mulherEncontrada.citacao = request.body.citacao
                }
                const mulherAtualizada = await mulherEncontrada.save()
                response.json(mulherAtualizada);
            
            } catch (erro) {
                console.log(erro)
            }
    }

//delete
    async function deletaMulher(request, response) {
        try {
            await Mulher.findByIdAndDelete(request.params.id)
            response.json({messagem: "Mulher deletada com sucesso!"})
        } catch (erro) {
            console.log (erro)
        }
    }

//porta
    function mostraPorta() {
        console.log("Servidor criado e rodando na porta", porta);
    }

app.use(router.get('/mulheres', mostraMulheres));//configurei rota GET /mulheres
app.use(router.post('/mulheres', criaMulher));//configurei rota post /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher))//configurei a rota patch /mulheres/:id
app.use(router.delete ('/mulheres/:id', deletaMulher));//configurei a rota delete /mulheres
app.listen(porta, mostraPorta); //servidor da porta