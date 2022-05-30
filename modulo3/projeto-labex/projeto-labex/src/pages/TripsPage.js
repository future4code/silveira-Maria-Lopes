import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`

const Button = styled.button`
color: #fff;
text-transform: uppercase;
font-size: 15px;
background: linear-gradient(45deg, rgb(255, 255, 111), rgb(0, 0, 128));
padding: 12px 30px;
border-radius: 30px;
border: none;
font-weight: bold;
display: inline;    
cursor: pointer;
`

const H1 = styled.h1`
display:flex;
justify-content: center;
align-items: center;
padding: 20px;
`

const Div = styled.div`
/* background-color: silver; */
height: 100%;
width: 98,5vw;
display: flex;
justify-content: center;
`

const Li = styled.li`
list-style-type: none;
width: 550px;
height: 150px;
box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
padding: 8px 20px;
display: flex;
justify-content: center;
flex-direction: column; 
`

const Div2 = styled.div`
width: 600px;
display:flex;
flex-direction: column;
align-items: center;
gap: 30px;
background-color: whitesmoke;
`
const DivButton = styled.button`
display:flex;
justify-content: center;
gap: 50px;
padding: 40px 0 20px 0;
background-color: black;
width: 600px;
`


function TripsPage () {
    const [tripsPage, setTripsPage] = useState([])
    
    useEffect(() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/trips')
            .then((response) => {
                setTripsPage(response.data.trips)
                console.log(response.data)
            }).catch((error) => {
                console.log(error.response)
            })
    }, [])

    const tripsList = tripsPage && tripsPage.map((trip) => {
        return ( <ul key={trip.id}>
            <Li> 
                <p><strong>Nome:</strong> {trip.name}</p>
                <p><strong>Descrição:</strong> {trip.description}</p>
                <p><strong>Planeta:</strong> {trip.planet}</p>
                <p><strong>Duração em dias:</strong> {trip.durationInDays}</p>
                <p><strong>Data:</strong> {trip.date}</p>
            </Li>
            </ul>
        )
    })

    let navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    const goToApplicationPage = () => {
        navigate('/applicationpage')
    }

    return( 
        <Div>
            <Div2>
            <GlobalStyle />

        <DivButton>
           <Button onClick={goToHome}>Voltar</Button>
           <Button onClick={goToApplicationPage}>Inscreva-se</Button>
        </DivButton>

           <H1>Lista de viagens</H1>
           {tripsList}
           </Div2>
        </Div>
    )
}

export default TripsPage;