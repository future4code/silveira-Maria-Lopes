import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'




const Div = styled.div`
box-sizing: 1px solid black;
border-radius:30px;
display: flex;
justify-content: space-between;
border: 3px solid silver;
padding: 10px;
cursor: pointer;
width: 50vw;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const Button = styled.button`
display:flex;
/* justify-content: flex-end; */
border-radius: 15px;
align-self:center;
padding: 5px;
font-family: Verdana, Geneva, Tahoma, sans-serif;

`

const H1 = styled.h1`
/* display: flex;
justify-content: center; */
margin-left: 175px;
margin-top: 50px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
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
    cursor: pointer;
    margin-left: 70px;
    margin-top: 20px;
    
`
const P = styled.p`
    padding: 10px;
`


function AdminPage() {
    const [tripsPage, setTripsPage] = useState([])


    useEffect(() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/trips')
            .then((response) => {
                setTripsPage(response.data.trips)
                console.log(response.data)
            }).catch((error) => {
                console.log(error.response)
            })
    }, [tripsPage])



    const deleteTrip = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/trips/${id}`, {
            headers: {
                auth: localStorage.getItem('token')
            }
        }).then((response) => {
            // alert('Viagem deletada com sucesso!')
            setTripsPage(response.data.trips)
        }).catch((error) => {
            alert('Não foi possível deletar sua viagem!')
        })
    }

  
    const goToTripDetailsPage = (id) => {
        navigate(`/tripsdetailspage/${id}`)
    }

    const goToCreateTrip = () => {
        navigate('/createtrippage')
    }

    const tripsList = tripsPage && tripsPage.map((trip) => {
        return (
            <Div key={trip.id}>
                <P onClick={() => goToTripDetailsPage(trip.id)}>Nome: {trip.name}</P>
                <Button onClick={() => deleteTrip(trip.id)}>Delete</Button>
            </Div>
        )
    }
    )

    let navigate = useNavigate()

    const goBackHome = () => {
        navigate('/')
    }


    return (

        <div>
            <H1>Painel Administrativo</H1>
            {tripsList}
            <Button2>Voltar</Button2>
            <Button2 onClick={goToCreateTrip}>Criar viagens</Button2>
            <Button2 onClick={goBackHome}>Logout</Button2>
        </div>

    )
}

export default AdminPage;