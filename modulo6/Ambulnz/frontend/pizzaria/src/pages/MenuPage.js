import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../services/url";
import { DivCards, H3, Button } from '../components/pizzaCard'

export const DivMain = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
align-self: center;
background-color: gray;
height: 100vh;
flex-direction: row;
flex-wrap: wrap;
padding-top: 30px;  
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

export default function MenuPage() {
    const [pizzas, setPizzas] = useState([]);
    const [order, setOrder] = useState([]);

    // const navigate = useNavigate();
    const token = window.localStorage.getItem("AuthToken");

    const headers = {
        headers: {
            authorization: token
        }
    }

    const getAllPizzas = () => {
        axios
            .get(`${BASE_URL}getallpizzas`, headers)
            .then((res) => {
                console.log(res.data.pizzas)
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
                // setOrder(res.data)
                alert("Pedido realizado com sucesso!")
            })
            .catch((err) => {
                console.log(err)
                alert("Não foi possível realizar o seu pedido!")
            })
    }

    useEffect(() => {
        getAllPizzas()
    }, []);

    const mapPizzas = pizzas && pizzas.map((pizza, index) => {
        return (
            <DivCards key={index}>
                <H3>{pizza.name}</H3>
                <IMG src={pizza.photo} alt={pizza.name} />
                <H3Price>Preço: {pizza.price},00</H3Price>
                <Button onClick={makeOrder}><H3Button>Realizar pedido</H3Button></Button>
            </DivCards>
        )
    })



    return (
        <DivMain>
            {mapPizzas}
        </DivMain>
    )
}