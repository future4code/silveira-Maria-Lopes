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

    const { id } = useParams();

    useProtectedPage();
    
    let navigate = useNavigate()

    
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/trip/{params.id}`, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                console.log(response.data)
            }).catch((error) => {
                console.log('Deu erro!', error)
            })
    }, [])



    const goToAdminPage = () => {
        navigate('/AdminPage')
    }


    return (
        <div>
            <div>

            Hello! I'm Trip Details page!
            
            <button onClick={goToAdminPage}>Voltar</button>
            {/* Esse botão vai voltar pra tela de admin page que é dentro de login  */}
            </div>
        </div>
    )
}

export default TripDetailsPage;