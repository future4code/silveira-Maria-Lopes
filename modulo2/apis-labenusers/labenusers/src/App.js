import React from "react";
import styled from 'styled-components';
import axios from "axios";
import TelaDeCadastro from './components/TelaDeCadastro'
import TelaDeUsuarios from './components/TelaDeUsuarios'



export default class App extends React.Component {

  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaDeCadastro lista={this.lista}/>
      case "lista":
        return <TelaDeUsuarios cadastro={this.cadastro}/>
      default:
        return <div>ERRO! Página não encontrada, poxinha! </div>
    }
  }

  cadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  lista = () => {
    this.setState({telaAtual: "lista"})    
  }








  render() {

    return (

      <div>
        {this.escolheTela()}
      </div>
    )
  }
}