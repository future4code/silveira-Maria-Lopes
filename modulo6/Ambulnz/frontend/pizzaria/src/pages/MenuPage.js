import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../services/url";
import PizzaCard from '../components/PizzaCard'
import useForm from "../hooks/useForm";

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
    const [idPizza, setIdPizza] = useState("")
    const [qtd, setQtd] = useState(0);
    // para adicionar a quantidade de pizzas que deseja pedir

    function AddButton() {
        setQtd(qtd + 1)
    }

    function RemoveButton() {

    }


    const token = window.localStorage.getItem("AuthToken");

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("AuthToken");
        navigate('/')
    }

    const headers = {
        headers: {
            authorization: token
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

    const makeOrder = (id) => {
        const body = {
            quantity: qtd,
            user_id: token,
            pizza_id: id
        }
console.log(body)
        axios
            .post(`${BASE_URL}order`, body, headers)
            .then((res) => {
                console.log(res.data)
                setOrder(res.data)
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
            <PizzaCard key={index}
                makeOrder={makeOrder}
                Pizza={pizza}
                ButtonAdd={AddButton}
                SetQuantity={setQtd}
                Qtd={qtd}
                SetIdPizza={setIdPizza}
            />
        )
    })



    return (
        <DivMain>
            <button onClick={logout}>Logout</button>
            {mapPizzas}

        </DivMain>
    )
}