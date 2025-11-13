import { Router } from "express";
import { BuscarAdmin, Cadastrar,ListarAdmins,listarUsers,verificar } from "../repository/loginRepository.js";
import { generateToken, getAuthentication } from "../utils/jwt.js";
const endpoint = Router()

const autenticar = getAuthentication()


endpoint.post('/cadastrar', async (req,resp)=>{
    let body = req.body
    let reg = await Cadastrar(body)

    

    resp.send({
        usuario: body.email,
        token: generateToken(body),

        novoID:reg
    })
})

endpoint.get('/totalUser', autenticar, async (req,resp)=>{
    let total = await listarUsers()
    resp.send({totalUsers: total})
})


endpoint.get('/totalAdmins', autenticar, async (req,resp)=>{
    
    let total = await ListarAdmins()
    resp.send({totalAdmins:total})

})



endpoint.post('/admin', async (req,resp)=>{

    let admin = req.body
    let reg = await BuscarAdmin(admin)  
    if(!reg){
        resp.status(401).send({erro:'Login inválido'})
    }

    resp.send({
        admin: admin.email,
        token: generateToken(admin)
    })          
})


endpoint.post('/login', async (req,resp)=>{
    let body = req.body
    let reg = await verificar(body)

    if(!reg){
        resp.status(401).send({erro:'Login inválido'})
    }

    resp.send({
        usuario: body.email,
        token: generateToken(body),

        registro:reg
    })

})




export default endpoint