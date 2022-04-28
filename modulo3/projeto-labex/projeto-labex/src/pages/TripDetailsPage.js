import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TripsPage from "./TripsPage";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`

// const H1 = styled.h1`
// display:flex;
// justify-content: center;
// align-items: center;
// margin-top: 0px;
// margin-bottom: 5px;
// padding: 10px;
// font-family: Verdana, Geneva, Tahoma, sans-serif;
// background-color: blue;
// height: 50px;
// `
const Div = styled.div`
    background-color: silver;
    height: 100vh; 
`
const DivDetails = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
background-color: pink;
height: 50vh;
width: 400px;
`
const DivDetailsContainer = styled.div`
display: flex;
justify-content: center;

`

const DivCandidates = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`

const DivCandidatesApproved = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`




const useProtectedPage = () => {
    
    let navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            navigate("/loginpage")
        }

    }, [])
}



function TripDetailsPage() {
    const [tripDetails, setTripDetails] = useState({})
    const [candidatesL, setCandidatesL] = useState([])

    const params = useParams();

    useProtectedPage();
    
    let navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/trip/${params.id}`, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                console.log(response.data)
                setTripDetails(response.data.trip)
                setCandidatesL(response.data.trip.candidates)
            }).catch((error) => {
                console.log('Deu erro!', error)
            })
    }, [candidatesL.id])


    const candidates = (id, boolean) => {
        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }

        const body = {
            approve: boolean
        }

        axios
        .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/trips/${tripDetails.id}/candidates/${id}/decide`, body, headers)
        .then((res) => {
            if (boolean === true) {
                alert("Candidato aprovado!")
            } else {
                alert("Candidato reprovado")
            }
        })
        .catch((error) => {
            console.log(error)
        })    
    }

    const details = 
        <DivDetails>
            <p>Nome: {tripDetails.name}</p>
            <p>Planeta: {tripDetails.planet}</p>
            <p>Descrição: {tripDetails.description}</p>
            <p>Data: {tripDetails.date}</p>
            <p>Duração em dias: {tripDetails.durationInDays}</p>
        </DivDetails>


    const candidatesList = candidatesL && candidatesL.map((candidate) => {
        return (
            <div>
            <div>
                <p>Nome: {candidate.name}</p>
                <p>Idade: {candidate.age}</p>
                <p>País: {candidate.country}</p>
                <p>Profissão: {candidate.profession}</p>
                <p>Texto de candidatura: {candidate.applicationText}</p>
            </div>
                    <button onClick={() => candidates(candidate.id, true)}>
                        Approved
                    </button>

                    <button onClick={() => candidates(candidate.id, false)}>
                        Disapproved
                    </button>
                    </div>
        )
    })

    const approvedCandidates = tripDetails.approved && tripDetails.approved.map((candidate) => {
        return (
            <DivCandidatesApproved key={candidate.id}>{candidate.name}</DivCandidatesApproved>
        )
    })

    const goToAdminPage = () => {
        navigate('/AdminPage')
    }


    return (
        <Div>
            <GlobalStyle />

            <div>
            
            <button onClick={goToAdminPage}>Voltar</button>
            {/* Esse botão vai voltar pra tela de admin page que é dentro de login  */}

            <DivDetailsContainer>
                <h1>Detalhes da viagem</h1>
                       {details}
            </DivDetailsContainer>


            <DivCandidatesApproved>
                <h1>Candidatos aprovados</h1>
                {approvedCandidates && approvedCandidates.length > 0 ? approvedCandidates : "Não há candidatos aprovados"}
            </DivCandidatesApproved>


            <DivCandidates>
                <h1>Candidatos pendentes</h1>
                {/* {candidatesList} */}
                {candidatesList.length === 0? "Não há candidatos" : candidatesList}
            </DivCandidates>
 

            </div>
        </Div>
    )
}

export default TripDetailsPage;