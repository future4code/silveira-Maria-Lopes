import React from "react";
import styled from "styled-components";
import axios from "axios";
import CriarPlaylist from "./components/CriarPlaylist";
import PlaylistsCriadas from "./components/PlaylistsCriadas";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {   
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

`

const H1 = styled.h1`
display: flex;
justify-content:center;
justify-items: center;
align-items: center;
font-size: 50px;
`

const Div = styled.div`
height: 645px;
background-color: #BC8F8F;
`

const Footer = styled.div`
    background-color: #FFA07A;
    height: 80px;
    margin-top: 270px;
    display: flex;
    justify-content: center;
`


const Header = styled.header`
display: flex;
justify-content:center;
justify-items: center;
align-items: center;
font-size: 150px;
background-color: #FA8072;
height: 80px;
`


export default class App extends React.Component {

  state = {
    telaAtual: "cadastrarPlaylist",
    idPlaylist: ""
  }


  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastrarPlaylist":
        return <CriarPlaylist lista={this.lista} />
      case "lista":
        return <PlaylistsCriadas cadastrarPlaylist={this.cadastrarPlaylist} />
    }
  }

  cadastrarPlaylist = () => {
    this.setState({ telaAtual: "cadastrarPlaylist" })
  }

  lista = () => {
    this.setState({ telaAtual: "lista" })
  }





  render() {


    return (

      <Div>

        <GlobalStyle />

        <Header>
          <H1>Labefy</H1>
        </Header>


        {this.escolheTela()}

      <div>
        <Footer>
          
        </Footer>
      </div>

      </Div>


    )
  }
}

