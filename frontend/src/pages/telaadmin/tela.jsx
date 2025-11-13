import { useEffect,useState } from "react"
import './tela.scss'
import { Link, useNavigate } from "react-router"
import Cabecalho from "../../components/cadastro/Cabecalho"
import api from '../../../api.js'

import { FaUsers } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";



export default function TelaAdmin(){
    const navigate = useNavigate()
    const [count,setCount] = useState(0)
    const [totalAdmins,setTotalAdmins] = useState(0)



    async function listarAdmins(){
        try {
            let resp = await api.get('/totalAdmins')
            setTotalAdmins(resp.data.totalAdmins)
        } catch (error) {
            console.log("Erro ao buscar admins", error)
            
        }
    }





    async function listarUsuarios(){
       try {
            let resp = await api.get('/totalUser')

    
            setCount(resp.data.totalUsers)
        } catch (err) {
            console.log("Erro ao buscar usuários", err)
        }
    }

    useEffect(()=>{
        let adm = localStorage.getItem('ADMIN') 
        if(adm == null || adm == undefined ){
            navigate('/')
        }
       
    },[]
)

listarUsuarios()
listarAdmins()
   
    return(
        <div>
            <Cabecalho/>
            <main>
     <h1>Ola admin seja bem vindo</h1>
            <div className="caixas">           
            <Link to={'/centralusers'} className="caixa_direita">
                <h2>Usuários</h2>
                <FaUsers size={60}/>{count}
        
            </Link>
            <Link  className="caixa_esqueda">
                <h2>Admins</h2>
                <MdAdminPanelSettings  size={60}/>{totalAdmins}
            </Link>
            </div>  

            </main>
        </div>
    )
}