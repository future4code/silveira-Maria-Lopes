import React from "react";
import styled from "styled-components";
import axios from "axios";
import CriarPlaylist from "./components/CriarPlaylist";
import PlaylistsCriadas from "./components/PlaylistsCriadas";



const H1 = styled.h1`
display: flex;
justify-content:center;
justify-items: center;
align-items: center;
font-size: 50px;
`

const Div = styled.div`
height: 93vh;
`

const Footer = styled.div`
    background-color: lightgray;
    height: 100px;
    margin-top: 320px;
    display: flex;
    justify-content: center;
`


const Header = styled.header`

`


export default class App extends React.Component {
  
    state = {
      telaAtual: "cadastrarPlaylist"
    }


    escolheTela = () => {
      switch (this.state.telaAtual) {
        case "cadastrarPlaylist":
          return <CriarPlaylist lista={this.lista}/>
        case "lista":
          return <PlaylistsCriadas cadastrarPlaylist={this.cadastrarPlaylist}/>
      }
    }
  
    cadastrarPlaylist = () => {
      this.setState({telaAtual: "cadastrarPlaylist"})
    }
  
    lista = () => {
      this.setState({telaAtual: "lista"})    
    }
  




  render() {


    return (

      <Div>

        <Header>
          <H1>Labefy</H1>
        </Header>

        {/* Aqui to passando meu primeiro componente, que é o de criar playlist.
        Tem o botão de Input nele. */}


       {this.escolheTela()}


      </Div>


    )
  }
}

