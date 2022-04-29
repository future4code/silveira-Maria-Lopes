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
const DivTelaToda = styled.div`
background-color: silver;
height: 100vh;
`

const H1 = styled.div`
display: flex;
justify-content: center;
font-size: 35px;
font-weight: bold;
`

const DivDetailsTrip = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background-color: pink;
height: 150px;
font-size: 17px;

p {

}
`

const DivCandidatesApproved = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
background-color: yellow;
height: 100px;
align-items: center;
`

const DivCandidates = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
background-color: green;
height: 100px;
align-items: center;

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
    const [candidatesApproved, setCandidatesApproved] = useState([])

    const params = useParams();

    useProtectedPage();

    let navigate = useNavigate()

    const getTripDetails = () => {
        const token = localStorage.getItem('token')
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/trip/${params.id}`, {
                headers: {
                    auth: token
                }
            })
            .then((response) => {
                console.log(response.data.trip.approved)
                setTripDetails(response.data.trip)
                setCandidatesL(response.data.trip.candidates)
                setCandidatesApproved(response.data.trip.approved)
            }).catch((error) => {
                console.log('Deu erro!', error)
            })
    }

    useEffect(() => {
        getTripDetails();
    }, [])


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
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/trips/${params.id}/candidates/${id}/decide`, body, headers)
            .then((res) => {
                console.log(res)
                getTripDetails();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const details =
        <DivDetailsTrip>
            <p><strong>Nome:</strong> {tripDetails.name}</p>
            <p><strong>Planeta:</strong> {tripDetails.planet}</p>
            <p><strong>Descrição:</strong> {tripDetails.description}</p>
            <p><strong>Data</strong> {tripDetails.date}</p>
            <p><strong>Duração em dias:</strong> {tripDetails.durationInDays}</p>
        </DivDetailsTrip>

    const candidatesList = candidatesL && candidatesL.map((candidate) => {
        return (
            <div>
                <p>Nome: {candidate.name}</p>
                <p>Idade: {candidate.age}</p>
                <p>País: {candidate.country}</p>
                <p>Profissão: {candidate.profession}</p>
                <p>Texto de candidatura: {candidate.applicationText}</p>

                <button onClick={() => candidates(candidate.id, true)}>
                    Approved
                </button>

                <button onClick={() => candidates(candidate.id, false)}>
                    Disapproved
                </button>
            </div>
        )
    })

    const approvedCandidates = candidatesApproved && candidatesApproved.map((candidate) => {
        return (
            <div key={candidate.id}>{candidate.name}</div>
        )
    })

    const goToAdminPage = () => {
        navigate('/AdminPage')
    }


    return (
        
        <DivTelaToda>
            <GlobalStyle />
            <button onClick={goToAdminPage}>Voltar</button>
            <H1>Detalhes da viagem</H1>
            
                <div>
                    {details}
                </div>

                <DivCandidates>
                    <h2>Candidatos pendentes</h2>
                    <div>
                    {/* {candidatesList} */}
                    {candidatesList.length === 0 ? <p>"Não há candidatos" </p> : candidatesList}
                    </div>
                </DivCandidates>

                <DivCandidatesApproved>
                    <h2>Candidatos aprovados</h2>

                    <div>
                    {approvedCandidates && approvedCandidates.length > 0 ? approvedCandidates : <p> "Não há candidatos aprovados" </p>}
                    </div>

                </DivCandidatesApproved>
            

        </DivTelaToda>
    )
}

export default TripDetailsPage;