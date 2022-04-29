import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`
const Div1 = styled.div`
background-color: silver;
height: 100%;
width: 98,5vw;
display: flex;
justify-content: center;
padding: 50px;
background-image: url('https://media.slidesgo.com/storage/8084792/conversions/21-inside-of-a-spaceship-videocall-backgrounds-thumb.jpg');
`
const Div2 = styled.div`
width: 500px;
height: 90vh;
display:flex;
flex-direction: column;
/* background-color: white; */
align-items: center;
gap: 20px;
/* border: 5px solid black; */
/* margin-top: 70px; */
border-radius: 10px;
background-color: silver;
`

const Div = styled.div`
box-sizing: 1px solid black;
border-radius:10px;
display: flex;
justify-content: space-between;
border: 3px solid black;
padding: 10px;
cursor: pointer;
width: 90%;
font-family: Verdana, Geneva, Tahoma, sans-serif;
height: 100%;
`

const H1 = styled.h1`
display: flex;
justify-content: center;
margin-top: 60px;
font-family: 'Times New Roman', Times, serif;
margin: 30px;
`

const Button = styled.button`
    color: #fff;
    text-transform: uppercase;
    /* font-size: 10px; */
    background: linear-gradient(45deg, rgb(255, 255, 111), rgb(0, 0, 139));
    padding: 12px 20px;
    border-radius: 20px;
    border: none;
    font-weight: bold;
    cursor: pointer;    
`

const ButtonDelete = styled.button`
    color: #fff;
    text-transform: uppercase;
    height: 40px;
    background: linear-gradient(45deg, rgb(255, 255, 111), rgb(0, 0, 139));
    padding: 12px 20px;
    border-radius: 20px;
    border: none;
    font-weight: bold;
    cursor: pointer;    
    margin-top: 12px;
`

const P = styled.p`
    padding: 20px;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
`
const DivButton = styled.button`
display:flex;
justify-content: space-between;
gap: 20px;
padding: 20px 0 20px 0;
width: 100%;
background-color: rgb(70,130,180);
`




function AdminPage() {
    const [tripsPage, setTripsPage] = useState([])

    const useProtectedPage = () => {
    
        let navigate = useNavigate()
    
        useEffect(() => {
            const token = localStorage.getItem('token')
    
            if (token === null) {
                navigate("/loginpage")
            }
    
        }, [])
    }
   
    useProtectedPage();


    useEffect(() => {
        getTrip();
    }, [])

    const getTrip = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/trips')
        .then((response) => {
            setTripsPage(response.data.trips)
            console.log(response.data)
        }).catch((error) => {
            console.log(error.response)
        })
    }        



    const deleteTrip = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/trips/${id}`, {
            headers: {
                auth: localStorage.getItem('token')
            }
        }).then((response) => {
            alert('Viagem deletada com sucesso!')
            getTrip();
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

    const goBacktToLogin = () => {
        navigate('/loginpage')
    }


    const tripsList = tripsPage && tripsPage.map((trip) => {
        return (
            <Div key={trip.id}>
                <P onClick={() => goToTripDetailsPage(trip.id)}>Nome: {trip.name}</P>
                <ButtonDelete onClick={() => deleteTrip(trip.id)}>Delete</ButtonDelete>
            </Div>
        )
    }
    )

    let navigate = useNavigate()

    const goBackHome = () => {
        navigate('/')
    }

    const logout = () => {
        localStorage.clear("token")
        goBacktToLogin();
    }

    return (

        <Div1>
            <GlobalStyle />

            <Div2>
            <H1>Painel Administrativo</H1>
            {tripsList}

            <DivButton>
            <Button onClick={goBackHome}>Voltar</Button>
            <Button onClick={goToCreateTrip}>Criar viagens</Button>
            <Button onClick={logout}>Logout</Button>
            </DivButton>

            </Div2>
        </Div1>

    )
}

export default AdminPage;