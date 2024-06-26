import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome}></img>
                <div className='rodape'>
                    <h4>{nome}</h4>
                    <h5>{cargo}</h5>
                </div>
            </div>
        </div>
    )
}

export default Colaborador