import { Link } from 'react-router'
import logo from '../../assets/images/aiai.jpeg'
import './cabecalho.scss'
import { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router'

export default function Cabecalho(){
    const [admin,setAdmin] = useState(false)
    const [user,setUser] = useState(false)
    const navigate = useNavigate()



    useEffect(()=>{
        let adm = localStorage.getItem('ADMIN')
      

        if(adm != null || adm != undefined){
            setAdmin(true)
        }
        else(
            setAdmin(false)
        )
      
    },[])

    

    useEffect(()=>{
        let user = localStorage.getItem("USUARIO")

        if(user != null || user != undefined){
            setUser(true)
        }
        else(
            setUser(false)
        )
    },[])

        function logout(){  
        localStorage.removeItem('USUARIO')
        localStorage.removeItem('ADMIN')
        localStorage.removeItem('TOKEN')
        navigate('/login')
        
    }



    return(
        <div>
        {user ? null:null}

        
        {admin ? null:null}


            <div className="cabecalho">


                <div className="links">

                    {user && 
                    <div>
                    <Link to={'/'}>inicio</Link>
                    <button onClick={logout}>Sair</button>
                    </div>}

                        
                    {admin && 
                    <div>
                    <Link to={'/'}>inicio</Link>
                    <Link to={'/teladm'}>Tela admin</Link>
                    <button onClick={logout}>Sair</button>
                    </div>}

                    {!user &&!admin && <div>
                    <Link to={'/'}>inicio</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/cadastrar'}>Cadastrar-se</Link>
                    <Link to={'/loginadmin'}> Admin</Link>
                    </div>}

                



                </div>
            </div>


        </div>
    )
}


