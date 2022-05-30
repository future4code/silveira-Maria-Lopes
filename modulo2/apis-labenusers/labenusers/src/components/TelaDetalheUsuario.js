import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


export default class TelaDeUsuarios extends React.Component {

    state ={ 
        detalheDoUsuario: {},
    }
  
    componentDidMount () {
        this.detalhesUsuario()
    }

    detalhesUsuario = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.idDoUsuario}`

        axios.get(url, {
            headers: {
                Authorization: "Maria-Eduarda-Lopes-Silveira"
            }
        })
            .then((res) => {
                this.setState({
                    detalheDoUsuario: res.data
                })
            })
            .catch((err) => {
                console.log(err.responde.data)
                alert("Puxa, ocorreu um erro aqui!")

            })
    }


   

    render() {

        return (

            <div>

                <p>{this.state.detalheDoUsuario.name} </p>
                <p>{this.state.detalheDoUsuario.email} </p>
                <button onClick={this.props.trocaDePagina}>Voltar para a página anterior</button>
            </div>
        )
    }
}