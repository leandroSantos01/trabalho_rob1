import { BrowserRouter,Route,Routes } from "react-router";
import App from './pages/home/index.jsx'


import Admin from "./pages/admin/index.jsx";
import Cadastrar from "./pages/cadastrar/Index.jsx";
import Login from "./pages/login/Sobre.jsx";
import TelaAdmin from "./pages/telaadmin/tela.jsx";



export default function Navegar(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<App/>}/>
            <Route path="/login" element = {<Login/>}/>
            <Route path="/cadastrar" element = {<Cadastrar/>}/>
            <Route path="/loginadmin" element = {<Admin/>}/>
            <Route path="/teladm" element = {<TelaAdmin/>}/>

        </Routes>
        </BrowserRouter>
    )
}