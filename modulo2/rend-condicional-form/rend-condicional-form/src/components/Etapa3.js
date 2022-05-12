import React, { Component } from 'react'
import styled from 'styled-components';


const TerceiroTexto = styled.div`
color: black;
display: flex;
justify-content: center;
justify-items: center;
margin-left: 30px;
`

const Formulario3 = styled.form`
display: flex;
justify-content: center;
justify-items: center;
margin-top: -20px;

`

const Lista3 = styled.li`
margin-left: 30px;
margin-bottom: 12px;
margin-top: 10px;
font-size: 17px;
`

const Input3 = styled.input`
width: 170px;
height: 17px;
margin-left: 100px;
`

const BotaoSeletor3 = styled.select`
margin-left: 135px;
`




export default class Etapa3 extends Component {
  render() {
    return (
      <div>
            <TerceiroTexto>
          <strong><h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3></strong>
        </TerceiroTexto>


        <Formulario3>

            <ol start="5">
              <Lista3>Por que você não terminou um curso de graduação?</Lista3>
              <Input3></Input3>

              <Lista3>Você fez algum curso complementar?</Lista3>


              <BotaoSeletor3>
                  <option value="item1">Nenhum</option>
                  <option value="item1">Curso técnico</option>
                  <option value="item1">Curso de inglês</option>
              </BotaoSeletor3>

            </ol>

        </Formulario3>
      </div>
    )
  }
}
