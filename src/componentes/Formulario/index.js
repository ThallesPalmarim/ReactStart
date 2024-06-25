import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    const times=[
        'Programação',
        'Front-End',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, cargo, imagem, time
        })
    } 
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto valor={nome} aoAlterado={valor =>setNome(valor)} obrigatorio ={true} label="Nome" placeholder="Digite seu nome"></CampoTexto>
                <CampoTexto valor={cargo} aoAlterado={valor =>setCargo(valor)} obrigatorio ={true} label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
                <CampoTexto valor={imagem} aoAlterado={valor =>setImagem(valor)} label="Imagem" placeholder="Digite o endereço da imagem"></CampoTexto>
                <ListaSuspensa valor={time} aoAlterado={valor=>setTime(valor)} obrigatorio ={true} itens={times} label='Time'></ListaSuspensa>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario