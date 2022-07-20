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

export default function cardPizzas(props) {

  return (

    <DivCards>
      <H3>Pizzas Cards</H3>
      <P><strong>Name:</strong> {props.name}</P>
      <P><strong>Price:</strong> {props.price}</P>
      <img src={props.photo} alt={props.name} />
      <Button>Realizar o pedido</Button>
    </DivCards>

  )
}
