import { Router } from "express";
import { adicionarLivros, Livros } from "../repository/livrosRepository.js";

const endpoint = Router()

endpoint.post('/livros', async (req,resp) =>{

    let novo = req.body;
    let id = await adicionarLivros(novo)
    resp.send({novoId:id})

})


endpoint.get('/livros/listar', async (req,resp) => {

    let id = await Livros()
    resp.send(id)

})


export default endpoint