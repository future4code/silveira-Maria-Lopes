import React, { Component } from 'react'
import styled from 'styled-components';




const PrimeiroTexto = styled.div`
color: black;
display: flex;
justify-content: center;
justify-items: center;
margin-left: 30px;
`

const Formulario = styled.form`
display: flex;
justify-content: center;
justify-items: center;
margin-top: -10px;

`

const Input = styled.input`
width: 170px;
height: 17px;
`
const Lista = styled.li`
margin-left: 30px;
margin-bottom: 12px;
margin-top: 10px;
font-size: 17px;
`
const LiSeletor = styled.li`
margin-left: 10px;
margin-bottom: 12px;
margin-top: 10px;
`




export default class teste1 extends Component {
  render() {

    return (

      <div>

       <PrimeiroTexto>
          <strong><h3>ETAPA 1 - DADOS GERAIS</h3></strong>
       </PrimeiroTexto>

       

           <Formulario>
             <ol>
                 <Lista>Qual o seu nome?</Lista>
                 <Input></Input>
                 <Lista>Qual sua idade?</Lista>
                 <Input></Input>
                 <Lista>Qual seu e-mail?</Lista>
                 <Input></Input>
                 <LiSeletor>Qual a sua escolaridade?</LiSeletor>
                <select>
                   <option value="item1">Ensino médio incompleto</option>
                   <option value="item1">Ensino médio completo</option>
                   <option value="item1">Ensino superior incompleto</option>
                   <option value="item1">Ensino superior completo</option>                  
                </select>

              </ol>

            </Formulario>


       </div>

    )
  }
}
