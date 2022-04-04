import React, { Component } from 'react'
import styled from 'styled-components';


const Agradecimento = styled.div`
color: black;
display: flex;
justify-content: center;
justify-items: center;
margin-left: 30px;
`
const FraseFinal = styled.div`
color: black;
display: flex;
justify-content: center;
justify-items: center;
margin-left: 30px;
margin-top: -20px;
`



export default class agradecimento extends Component {
  render() {
    return (
      <div>

      <Agradecimento>
        <strong><h2>O FORMULÁRIO ACABOU!</h2></strong> 
      </Agradecimento>

      <FraseFinal>
      <strong><p>Muito obrigado por participar! Entraremos em contato!</p></strong>
      </FraseFinal>

     </div>

    )
  }
}
