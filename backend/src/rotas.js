import Livro from './controller/livrosController.js'
import Login from './controller/loginController.js'


export default function Rotas(api){
    api.use(Livro);
    api.use(Login);
}