
    import logo from '../../assets/images/aiai.jpeg'
    import './index.scss'



    export default function Rodape(){
        return(
            <div>
                <div className="rodape">
                    <img src={logo} alt="" />
                    <div className="caixas">
    <div className="caixa">
        <p><strong>Contato</strong></p>
        <p>(11) 91234-5678</p>
        <p>livraria@frei.com.br</p>
    </div>

    <div className="caixa">
        <p><strong>Desenvolvido por</strong></p>
        <p>Aluno 1 da Silva</p>
        <p>Aluno 2 dos Santos</p>
        <p>Aluno 3 Teixeira Machado</p>
    </div>

    <div className="caixa">
        <p><strong>Turma</strong></p>
        <p>Informática X</p>
    </div>

    <div className="rodape-final">
    <p> <strong className='ola'>   2025 @ Instituto Nossa Senhora </strong></p>
   

                </div>
             
            </div>
       
            </div>
            <p> <strong className='ola'>   2025 @ Instituto Nossa Senhora </strong></p>
            </div>
        )
    }