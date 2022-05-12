import React, { Component } from 'react'
import styled from 'styled-components';

const SegundoTexto = styled.div`
color: black;
display: flex;
justify-content: center;
justify-items: center;
margin-left: 30px;
`

const Formulario2 = styled.form`
display: flex;
justify-content: center;
justify-items: center;
margin-top: -20px;

`

const Lista2 = styled.li`
margin-left: 50px;
margin-bottom: 12px;
margin-top: 10px;
font-size: 17px;
`

const Lista6 = styled.li`
margin-right: 10px;
margin-bottom: 12px;
margin-top: 10px;
font-size: 17px;

`

const Input2 = styled.input`
width: 170px;
height: 17px;`



export default class Etapa2 extends Component {
  render() {
    return (
      <div> 
          <SegundoTexto>
      <strong><h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3></strong>
          </SegundoTexto>
     

     <Formulario2>

       <ol start ="5">

           <Lista2>Qual curso?</Lista2>
           <Input2></Input2>

           <Lista6>Qual a unidade de ensino?</Lista6>
           <Input2></Input2>
          </ol>  

     </Formulario2>
     
      </div>
    )
  }
}
