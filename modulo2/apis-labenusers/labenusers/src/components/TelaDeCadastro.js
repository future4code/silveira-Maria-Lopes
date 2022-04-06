import React from 'react'
import axios from 'axios'
import styled from 'styled-components'



const BotaoPrimeiraPagina = styled.button`
display: flex;
margin-top: 20px;
margin-left: 585px;
`
const Cadastro = styled.h2`
display: flex;
justify-content: center;
justify-items: center;
align-items: center;
margin-left: 10px;
`

const Input = styled.input`
display: flex;
align-items: center;
margin-left: 580px;
height: 25px;
width: 200px;
`
const BotaoCadastrar = styled.button`
margin-left: 645px;
margin-top: 10px;

`

export default class TelaDeCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    onChangeNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    criarCadastro = () => {    
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "Maria-Eduarda-Lopes-Silveira"
            }
        }).then((res) => {
            alert("Usuário cadastrado com sucesso! Uhul!")
            this.setState({
                nome: "",
                email: ""
            })
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    botaoEnter = (event) =>{ 
        if(event.keyCode === 13) {
            this.criarCadastro()
        }
    }


    render() {
        return (
            <div>
                <BotaoPrimeiraPagina onClick={this.props.lista}>Oi! Eu sou a lista de usuários :)</BotaoPrimeiraPagina>
                <Cadastro>Cadastro</Cadastro>

                <div onKeyDown={(event) => this.botaoEnter(event)}>
                <Input
                    placeholder={"nome"}
                    value={this.state.nome}
                    onChange={this.onChangeNome}
                />
                <Input
                    className='botaoenter'
                    placeholder={"Email"}
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                />
                <BotaoCadastrar type="submit" onClick={this.criarCadastro}>Cadastrar</BotaoCadastrar>
                </div>

            </div>
        )
    }
}