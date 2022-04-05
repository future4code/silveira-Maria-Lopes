import React from "react";
import styled from 'styled-components';
import axios from "axios";


const headers = {
  headers: {
    Authorization: "Maria-Eduarda-Lopes-Silveira"
  }
};


export default class App extends React.Component {

  state = {

    usuarios: [],
    inputName: "",
    inputEmail: "",
    inputBusca: "",

  }


  componentDidMount() {
    this.getAllUsers();
  }


  getAllUsers = () => {
    const urlGet = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"


    axios
      .get(urlGet, headers)
      .then((res) => {
        this.setState({
          usuarios: res.data
        })

      }).catch((err) => {
        console.log(err.res.data.message)
      })
  }



  createAllUsers = () => {

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }

    axios.post(url, headers, body)
      .then((res) => {
        this.GetAllUsers();
        this.setState({
          inputName: "", inputEmail: ""
        });
        // alert(`Usuário criado com sucesso!`)

      }).catch((err) => {
        alert(err.response.data.message);
      })


  };

  onChangeBusca = (event) => {
    this.setState({ inputBusca: event.target.value })
  }

  onChangeName = (event) => {
    this.setState({ inputName: event.target.value })
  }


  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value })
  }







  render() {

    const usuariosCriados = this.state.usuarios.map((usuario) => {
      return <li key={usuario.id}>{usuario.name}</li>

    })


    return (
      <div >

        <button>Troca de tela</button>


        

          <input
            type="text"
            placeholder="Nome"
            value={this.state.inputName}
            onchange={this.onChangeName}
          />

          <input
            placeholder="E-mail"
            value={this.state.inputEmail}
            onchange={this.onChangeEmail}
          />

       

        <button onClick={this.createAllUsers}>Criar Usuário</button>
        <ul>{usuariosCriados}</ul>

      </div>
    );
  }
}
