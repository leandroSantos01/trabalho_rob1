import './index.scss'

export default function Cartao({imagem, titulo, descricao,direita}){
    
    return (
    <div className="conteiner-cartao">
        <div className= {`imagem ${direita ? 'girar':'' }`}>
            <img 
            src={imagem}  />
        </div>

        <div className="info">
            <h1>{titulo}</h1>
            <p>{descricao}</p>
        </div>

    </div>
    )

}
