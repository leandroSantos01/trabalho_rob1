import { connection } from "./connection.js";

export async function Livros() {
    const comando = `select * from Livros`

    const [registro] = await connection.query(comando)
    return registro
}


export async function adicionarLivros(novo) {
    const comando = `
    insert into Livros(titulo, autor,capa_url) 
    values
    (?,?,?)
    `
    
    const [info] = await connection.query(comando, [novo.titulo, novo.autor, novo.capa_url])
    return info.insertId
}