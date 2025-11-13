
import '../../scss/global.scss'
import { useState,useEffect } from 'react'
import api from '../../../api.js'
import Cabecalho from '../../components/cadastro/Cabecalho';
import { useNavigate } from 'react-router';

export default function Login(){
    

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();


    function removerToken(){
        localStorage.removeItem('TOKEN')
        localStorage.removeItem('ADMIN')
        navigate('/')
    }


    async function Logar(){
        
    if(email.length <= 1 && senha.length <= 1){
        toast.error('preencha todos os campos')
        return
    }

    if(email.length <=1){
        toast.error('insira um email')
        return
    }

    if(senha.length<=1){
        toast.error('insira uma senha')
        return
    }


    if(!email|| !senha){
        toast.error('Credenciais inválidas ')
    }



        let login = {
            email,
            senha
        }

        let res = await api.post('/login',login)
        console.log(res.data)

        localStorage.setItem('TOKEN', res.data.token)
        localStorage.setItem('USUARIO', res.data.usuario)
        navigate('/')
        
        
    }

        useEffect(()=>{
        let user = localStorage.getItem("USUARIO")

        if(user != null || user != undefined){
            navigate('/')
        }
    },[])

    function Enviar(e){
        if(e.key === 'Enter'){
            Admin()
        }   
    }

    return(
        <div>
            <Cabecalho/>
             <div className="area_login">
                    <label htmlFor="">LOGIN </label>
                    <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}  onKeyUp={Enviar}/>
                    <input type='password' placeholder='senha' value={senha} onChange={(e) => setSenha(e.target.value)} onKeyUp={Enviar}/>
                    <button onClick={Logar}>clique aqui</button>




            </div>
            
        </div>
    )
}
