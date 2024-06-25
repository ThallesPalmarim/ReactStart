import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const times=[
        'Programação',
        'Front-End',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    const aoSalvar = (evento) => {
        evento.preventDefault()
    } 
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio ={true} label="Nome" placeholder="Digite seu nome"></CampoTexto>
                <CampoTexto obrigatorio ={true} label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"></CampoTexto>
                <ListaSuspensa obrigatorio ={true} itens={times} label='Time'></ListaSuspensa>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario