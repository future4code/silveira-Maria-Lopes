import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import GlobalStateContext from "../context/GlobalStateContext"


const CardActive = styled.div`
  border-radius: 10px;
  border: solid 2px #b8b8b8;
  min-height:10vh;
  width: 365px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #E86E5A;
  position: relative;
  margin-left: 5px;
`
const Paragraph = styled.div`
  word-wrap: break-word;
  font-size: 18px;
  padding-left: 100px;
  margin-bottom: 5px;
`
const IMG = styled.img`
left: 0;
height: 60px;
width: 60px;
/* padding-top: 10px; */
`
const PedidoEmAndamento = styled.p`
padding-left: 100px;
color: white;
font-size: 20px;
margin-top: -40px;
`

const ActiveOrderComponent = (props) => {
    const [pedidoAtivo, setPedidoAtivo] = useState(null);
    const [pizzas, setPizzas] = useState([]);

    const token = window.localStorage.getItem("AuthToken");
    const headers = {
        headers: {
            auth: AuthToken
        }
    }

    const getAllPizzas = () => {
        axios
            .get(`${BASE_URL}getallpizzas`, headers)
            .then((res) => {
                setPizzas(res.data.pizzas)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const makeOrder = () => {
        axios
            .post(`${BASE_URL}order`, headers)
            .then((res) => {
                console.log(res.data)
                setOrder(res.data)
                alert("Pedido realizado com sucesso! Resumo do pedido: (...)")
            })
            .catch((err) => {
                console.log(err)
                alert("Não foi possível realizar o seu pedido!")
            })
    }

    useEffect(() => {
        getAllPizzas()
    }, []);

    // requisição de pegar pizzas e requisição de realizar o pedido

    return (
        <CardActive>
            <IMG src={''} />
            <PedidoEmAndamento>Pedido em andamento:</PedidoEmAndamento>
            <Paragraph> {pedidoAtivo.get} </Paragraph>
            <Paragraph><strong>SUBTOTAL: R$ {pedidoAtivo.price} </strong></Paragraph>
        </CardActive>
    )
}

export default ActiveOrderComponent; 