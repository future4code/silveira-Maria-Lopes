import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import TelaDetalheUsuario from '../components/TelaDetalheUsuario'


const Usuario = styled.div`
border: 1px outset pink;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
align-items: center;
justify-content: space-between;
margin-left: 500px;
`

const ListaDeUsuarios = styled.div`
margin-left: 100px;
font-size: 20px;
margin-top: 20px;
color: salmon;
display: flex;
justify-content: center;
margin-right: 125px;
margin-bottom: 20px;
`

const Botao = styled.button`
margin-left: 565px;
margin-top: 20px;
`

const BotaoDeletar = styled.button`
display: flex;
justify-content: space-between;
`


export default class TelaDeUsuarios extends React.Component {

    state = {
        usuarios: [],
        paginaAtual: 1,
        idUsuario: ""
    }

    componentDidMount() {
        this.getallUsers()
    }

    // Isso serve para, assim que a tela abrir, irá renderizar
    // minha lista de usuários automaticamente.

    getallUsers = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "Maria-Eduarda-Lopes-Silveira"
            }
        }).then((res) => {
            this.setState({
                usuarios: res.data
            })

        })
            .catch((err) => {
                alert("Putz, deu erro!")
            })

    };


    deletarUsuario = (id) => {
        if (window.confirm("Puxa! Quer mesmo deletar esse usuário?") === true) {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

            axios
                .delete(url, {
                    headers: {
                        Authorization: "Maria-Eduarda-Lopes-Silveira"
                    }
                })
                .then((res) => {
                    alert("Usuário deletado com sucesso!")
                    this.getallUsers()

                })
                .catch((err) => {
                    alert("Puxa, não consegui deletar o usuário, acredita?")

                })

        } else {
            alert("Usuário não deletado!")
        }
    }


    trocarDePagina = (id) => {
        if (this.state.paginaAtual === 1) {
            this.setState({
                paginaAtual: this.state.paginaAtual + 1,
                idUsuario: id
            })
        } else {
            this.setState({
                paginaAtual: this.state.paginaAtual - 1,
                idUsuario: ""
            })
        }
    }

    render() {
        const listaUsuarios = this.state.usuarios.map((usuario) => {
            return <Usuario onClick={() => this.trocarDePagina(usuario.id)}
                key={usuario.id}>
                {usuario.name}
                <BotaoDeletar onClick={() => this.deletarUsuario(usuario.id)}>X</BotaoDeletar>
            </Usuario>


        })
        console.log(this.state.paginaAtual)

        return (
            <div>
                {this.state.paginaAtual === 1 ? 
                <div>
                    <Botao onClick={this.props.cadastro}>Clique aqui para se cadastrar</Botao>
                    <ListaDeUsuarios>Lista de usuários</ListaDeUsuarios>
                    {listaUsuarios}
                </div> : <TelaDetalheUsuario trocaDePagina={this.trocarDePagina} idDoUsuario={this.state.idUsuario}/> }

            </div>
        )
    }
}