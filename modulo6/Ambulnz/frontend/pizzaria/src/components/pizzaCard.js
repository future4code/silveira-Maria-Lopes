import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export const DivCards = styled.div`
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px;
  border-radius: 5px;
  min-height:50vh;
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

export default function cardPizzas(props) {

    return (
        <DivCards>
            <H3>Pizzas Cards</H3>
            <P><strong>Name:</strong> {props.name}</P>
            <P><strong>Price:</strong> {props.price}</P>
            <button>Realizar o pedido</button>
        </DivCards>
    )
}
