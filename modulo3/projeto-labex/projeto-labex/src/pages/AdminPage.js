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

`
const Div2 = styled.div`
width: 700px;
height: 100%;
display:flex;
flex-direction: column;
background-color: white;
align-items: center;
gap: 20px;
border: 10px solid black;
margin-top: 90px;
border-radius: 30px;
margin-left: 100px;
background-color: pink;
`

const Div = styled.div`
box-sizing: 1px solid black;
border-radius:20px;
display: flex;
justify-content: space-between;
border: 3px solid black;
padding: 20px;
cursor: pointer;
width: 40vw;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`

// const Button = styled.button`
// display:flex;
// /* justify-content: flex-end; */
// border-radius: 15px;
// align-self:center;
// padding: 5px;
// font-family: Verdana, Geneva, Tahoma, sans-serif;

// `

const H1 = styled.h1`
display: flex;
justify-content: center;
margin-top: 60px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
margin: 30px;
`

const Button = styled.button`
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    background: linear-gradient(45deg, rgb(255, 255, 111), rgb(0, 0, 139));
    padding: 12px 30px;
    border-radius: 30px;
    border: none;
    font-weight: bold;
    cursor: pointer;    
`
const P = styled.p`
    padding: 10px;
`
const DivButton = styled.button`
display:flex;
justify-content: space-between;
gap: 20px;
padding: 20px 0 20px 0;
width: 680px;
background-color: brown;
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
                <Button onClick={() => deleteTrip(trip.id)}>Delete</Button>
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
            <Button onClick={goBacktToLogin}>Voltar</Button>
            <Button onClick={goToCreateTrip}>Criar viagens</Button>
            <Button onClick={logout}>Logout</Button>
            </DivButton>

            </Div2>
        </Div1>

    )
}

export default AdminPage;