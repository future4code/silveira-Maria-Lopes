import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../services/url";
import { DivCards, H3 } from '../components/pizzaCard'


export default function MenuPage() {
    const [pizzas, setPizzas] = useState([]);

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

    useEffect(() => {
        getAllPizzas()
    }, []);

    const mapPizzas = pizzas && pizzas.map((pizza, index) => {
        return (
            <DivCards key={index}>
                <H3>{pizza.name}</H3>
                <h1>{pizza.price}</h1>

                {/* <Imagem src={''} alt={pizza.name} /> */}
                <button><h1>Realizar pedido</h1></button>
            </DivCards>
        )
    })

 

    return (
        <div>
            {mapPizzas}
            qualquer coisinha
        </div>
    )
}