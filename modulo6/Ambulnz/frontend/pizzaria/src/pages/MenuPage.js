import React, { useState } from "react";
import useForm from '../hooks/useForm';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../services/url";
import { DivCards, H3, Button, TextoBotao } from '../components/pizzaCard'


export default function MenuPage() {
    const [pizzas, setPizzas] = useState([]);

    // const navigate = useNavigate();
    const token = window.localStorage.getItem("token");

    const headers = {
        headers: {
            auth: token
        }
    }

    const getAllPizzas = () => {
        axios
            .get(`${BASE_URL}getallpizzas`, headers)
            .then((res) => {
                setPizzas(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const mapPizzas = getAllPizzas && getAllPizzas.map((pizza, index) => {
        return (
            <DivCards key={index}>
                <H3>{pizza.name.toUpperCase()}</H3>

                {/* <Imagem src={''} alt={pizza.name} /> */}
                <button><h1>Realizar pedido</h1></button>
            </DivCards>
        )
    })

    return (
        <div>
            {pizzas && mapPizzas}
        </div>
    )
}