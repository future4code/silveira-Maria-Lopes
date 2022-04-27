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
    margin-left: 525px;
    margin-top: 100px;
    cursor: pointer;
`
const Button2 = styled.button`
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    background: linear-gradient(45deg, rgb(255, 255, 111), rgb(0, 0, 128));
    padding: 12px 30px;
    border-radius: 30px;
    border: none;
    font-weight: bold;
    margin-left: 30px;
    cursor: pointer;
`

const H1 = styled.h1`
display:flex;
justify-content: center;
align-items: center;
margin-top: 30px;
`

const Div = styled.div`
background-color: silver;
height: 100vh;
`
const DivTrips = styled.div `
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    width: 80%;
    margin-bottom: 10px;
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
        return (
            <DivTrips key={trip.id}>
                <p>Nome: {trip.name}</p>
                <p>Descrição: {trip.description}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Duração em dias: {trip.durationInDays}</p>
                <p>Data: {trip.date}</p>
            </DivTrips>
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
            {tripsList}
            <GlobalStyle />
           <Button onClick={goToHome}>Return</Button>
           <Button2 onClick={goToApplicationPage}>Sign Up</Button2>
           <H1>Travel List</H1>
        </Div>
    )
}

export default TripsPage;