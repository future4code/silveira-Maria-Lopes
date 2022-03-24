import React from 'react';
import styled, { createGlobalStyle, ThemeConsumer } from 'styled-components'
import Post from './components/Post/Post';
import Post2 from './components/Post2/Post2'
import Post3 from './components/Post3.js/Post3'
import PrimeiraFoto from './img/primeirafoto.png'
import SegundaFoto from './img/segundafoto.png'
import TerceiraFoto from './img/terceirafoto.png'
import QuartaFoto from './img/quartafoto.png'


const Global = createGlobalStyle`
margin: 0;
padding: 0;
`


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  `
  
// const MainContainer2 = styled.div`
// display: flex;
// justify-content: center;
// flex-direction: column;
// align-items: center;

// `

const Formulario = styled.form`
display:flex;
flex-direction:column;
width: 40%;
margin-top: 10px;
`

const BotaoInput = styled.input`
  width: 100%;
  height: 25px;
  padding: 14px 16px 0 10px;
  outline: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  display:center;
  align-items: center;
`

const Label = styled.label`
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 12px;
  color: #999;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  min-width: 350px;
  
`
const Botao = styled.button`
justify-self:center;
align-self:center;
margin-top: 5px;
margin-bottom: 5px;

`


class App extends React.Component {
  state = {

    pessoas:[

      {
        nomeUsuario:"paulinha",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost:"https://picsum.photos/200/150"
      },

      {
        nomeUsuario:"Maria Eduarda",
        fotoUsuario: TerceiraFoto,
        fotoPost: SegundaFoto
      },

      {
        nomeUsuario:'Duda',
        fotoUsuario:QuartaFoto,
        fotoPost:PrimeiraFoto
      }

    ],
    NomeUsuario: "",
    FotoUsuario:"",
    FotoPost:""
  }

    
    onChangeNomeUsuario = (event) => {
      this.setState({NomeUsuario: event.target.value})
    }

    onChangeFotoUsuario = (event) => {
      this.setState({FotoUsuario: event.target.value})
    }

    onChangeFotoPost = (event) => {
      this.setState({FotoPost: event.target.value})
    }

    adicionandoPost = (event) => {
      event.preventDefault()
      const novoPost = {
        nomeUsuario: this.state.NomeUsuario,
        fotoUsuario: this.state.FotoUsuario,
        fotoPost: this.state.FotoPost
      } 
      const novoPostAdicionado = [...this.state.pessoas, novoPost]
      console.log(novoPostAdicionado)
      this.setState({
      pessoas: novoPostAdicionado, 
      NomeUsuario: "",
      FotoUsuario:"",
      FotoPost:""
    })
    }


  render() {
    const listaDeComponentes = this.state.pessoas.map((post, index) => {
      return (
        <Post
        key = {index}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <MainContainer>

           <Global />
        <Formulario onSubmit={this.adicionandoPost}>
          
            <BotaoInput value={this.state.NomeUsuario}
          onChange={this.onChangeNomeUsuario}
          placeholder={"Nome do Usuário"} />

         
            <BotaoInput value={this.state.FotoUsuario}
          onChange={this.onChangeFotoUsuario}
          placeholder={"Foto do Usuário"} />
          
          <BotaoInput value={this.state.FotoPost}
          onChange={this.onChangeFotoPost}
          placeholder={"Foto do Post"} />
                             
          <Botao type="submit"> Adicionar </Botao>
        </Formulario>



        {listaDeComponentes}
      </MainContainer>
    );
  }

}




export default App;
