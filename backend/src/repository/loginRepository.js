import { connection } from "./connection.js"


export async function Cadastrar(novo) {
    const comando =  `Insert into LOGIN (nome,email,senha,data_criacao)
        values(?,?,MD5(?),?)`

    const [info] = await connection.query(comando,
        [novo.nome, novo.email, novo.senha,new Date()]
    )

    return info.insertId

}

export async function listarUsers() {
    const [res] = await connection.query(`
        SELECT COUNT(*) AS total
        FROM LOGIN
    `)
    return res[0].total
}


export async function ListarAdmins() {
    const [res] = await connection.query(
        `
        SELECT COUNT(id) as totaladmins
        FROM LOGIN_ADM
        `
    )

    return res[0].totaladmins
}


export async function verificar(pessoa) {
    const comando = `
select nome,
       email
  from login
 where email = ?
   and senha = MD5(?)
`

    const [info] = await connection.query(comando, [pessoa.email, pessoa.senha])
    return info[0]
}


export async function BuscarAdmin(adimin) {
    const comando = `
    select * from LOGIN_ADM
    where email = ?
    and senha = ?
    `

    const [info] = await connection.query(comando, [adimin.email, adimin.senha])
    return info[0]

}

export async function Listar() {
    const comando = `
        SELECT * FROM Login
    `

    const [linhas] = await connection.query(comando)
    return linhas
}