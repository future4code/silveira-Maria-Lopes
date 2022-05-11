import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom"



// const DivCatalogo = styled.div`
// display: grid;
// grid-template-columns: 1fr 1fr 1fr 1fr;
// grid-template-rows: 1fr 1fr;

// `

// const DivCard = styled.div`
// width: 230px;   
// box-shadow: 2px 2px 2px 2px darkgray; 
// display: flex;
// flex-direction: column;
// align-items: center;
// `

function Card(props) {
    const [pokefoto, setPokeFoto] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams();

    useEffect(() => {
        axios
            .get('')
            .then((response) => {
                setPokeFoto(response.data)
                setIsLoading(true)
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
                alert("Erro! Tente novamente");
            });
    }, ['link da api aqui'])




    return (
        <div>
            <img src={props.imagem} />
            <p>Nome: {props.name}</p>

            <div>
                <button>Add a Pokedex</button>
                <button>Ver detalhes</button>
            </div>


        </div>

    )
}

export default Card;