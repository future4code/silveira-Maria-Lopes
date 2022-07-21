import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export const DivCards = styled.div`
  box-shadow: rgb(0, 0, 0, 1) 0px 0px 0px 5px, rgb(255, 217, 19) 0px 0px 0px 4px, rgb(255, 156, 85) 0px 0px 0px 6px, rgb(255, 85, 85) 0px 0px 0px 8px;
  border-radius: 5px;
  min-height: 20vh;
  width: 20vw;
`
export const P = styled.div`
  word-wrap: break-word;
  line-height: 20.0px;
`
export const H3 = styled.h3`
  display: flex;
  justify-content: center;
  padding: 5px;
`
export const Button = styled.button`
height: 30px;
display: flex;
justify-content: center;
align-items: center;
align-self: center;
`

const IMG = styled.img`
width: 273px;
height: 150px;
`

const H3Button = styled.h2`
display: flex;
justify-content: center;
align-items: center;
align-self: center;
cursor: pointer;
`
const H3Price = styled.h3`
font-size: 20px;
text-align: center;
`

const Input = styled.input`
width: 20px;
`
export default function PizzaCard(props) {

  const onChangeInput = (event) => {
    props.SetQuantity(event.target.value)
  }

  return (

    <DivCards>
      <H3>{props.Pizza.name}</H3>
      <IMG src={props.Pizza.photo} alt={props.Pizza.name} />
      <H3Price><strong>Preço:</strong> {props.Pizza.price}</H3Price>
      <Button onClick={() => props.makeOrder(props.Pizza.id)}>Realizar o pedido</Button>
      <button onClick={() => props.ButtonAdd()}>Adicionar</button>
      <Input value={props.Qtd} onChange={onChangeInput} />
      <button>Remover</button>
    </DivCards>

  )
}
