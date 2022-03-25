import logo from './logo.svg';
import './App.css';
import React from "react";
import styled from "styled-components";



const Main = styled.main`
  border: 1px solid black;
  height: 100vh;
  width: 40%;
  margin: 0 30%;
  display: grid;
  grid-template: column;
  grid-template-rows: 96.5fr 3.5fr;
  align-items: flex-end;
  background-color:pink;
`

// const WhatsContainer = styled.div`
//   border: 1px solid black;
//   height: 100vh;
//   /* min-width: 600px; */
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;

// `

const MessageAreaContainer = styled.div`
  width: 100wh;
  padding: 0 3%;
  margin: 10p;
  background-color: plum;

`

const InputsContainer = styled.div`
  color: pink;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;

`

const Usuario = styled.input`
width: 110px;

`

const Mensagem = styled.input`
width: 350px;
`


export default class App extends React.Component{

    state={
      whatsapp: [{

        Usuario: "",
        Mensagem: ""

      }],
      valorInputUsuario: "",
      valorInputMensagem: "" 
    }

      onChangeUsuario = (event) => {
        this.setState({valorInputUsuario: event.target.value})
      }

      onChangeMensagem = (event) => {
        this.setState({valorInputMensagem: event.target.value})
      }


      enviandoMensagem = (event) => {
        const novaMensagem = {
          Usuario: this.state.valorInputUsuario,
          Mensagem: this.state.valorInputMensagem
        }
        const enviaNovaMensagem = [...this.state.whatsapp, novaMensagem];
        this.setState({
          whatsapp: enviaNovaMensagem,
          valorInputMensagem: ""
        })
      }

      

  render(){

    const mensagens = this.state.whatsapp.map((msg) => {
        return (
            <div>
              <p>{msg.Usuario}: {msg.Mensagem}</p>
            </div>
        );
      
    });




  
    return (
      <Main>
             <MessageAreaContainer>
               {mensagens}
             </MessageAreaContainer>

                 <InputsContainer>
               <Usuario
                  value={this.state.valorInputUsuario}
                  onChange={this.onChangeUsuario}
                  placeholder={"Usuário"} />


                <Mensagem
                  value={this.state.valorInputMensagem}
                  onChange={this.onChangeMensagem}
                  placeholder={"Mensagem"} />

               <button onClick={this.enviandoMensagem}>Enviar</button>

                </InputsContainer>
      </Main>

    )}}