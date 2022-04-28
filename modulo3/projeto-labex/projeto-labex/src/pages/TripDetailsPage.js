import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TripsPage from "./TripsPage";





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

    const { id } = useParams();

    useProtectedPage();
    
    let navigate = useNavigate()

    
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/trip/{params.id}`, {
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
    }, [candidatesL.id, tripDetails.id])


    const candidates = (id, choice) => {
        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }

        const body = {
            approve: choice
        }

        axios
        .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/trips/${tripDetails.id}/candidates/${id}/decide`, body, headers)
        .then((res) => {
            if (choice === true) {
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
        <>
            <p>Nome: {tripDetails.name}</p>
            <p>Planeta: {tripDetails.planet}</p>
            <p>Descrição: {tripDetails.description}</p>
            <p>Data: {tripDetails.date}</p>
            <p>Duração em dias: {tripDetails.durationInDays}</p>
        </>


    const candidatesList = candidates.id && candidates.map((candidate) => {
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
            <div key={candidate.id}>{candidate.name}</div>
        )
    })

    const goToAdminPage = () => {
        navigate('/AdminPage')
    }


    return (
        <div>
            <div>
            
            <button onClick={goToAdminPage}>Voltar</button>
            {/* Esse botão vai voltar pra tela de admin page que é dentro de login  */}

            <div>
                <h1>Detalhes da viagem</h1>
                       {details}
            </div>


            <div>
                <h1>Candidatos aprovados</h1>
                {approvedCandidates && approvedCandidates.length > 0 ? approvedCandidates : "Não há candidatos aprovados"}
            </div>


            <div>
                <h1>Candidatos pendentes</h1>
                {candidates.length === 0? "Não há candidatos" : candidatesList}
                {/* {candidatesList.length === 0? "Não há candidatos" : candidatesList} */}
            </div>
 

            </div>
        </div>
    )
}

export default TripDetailsPage;