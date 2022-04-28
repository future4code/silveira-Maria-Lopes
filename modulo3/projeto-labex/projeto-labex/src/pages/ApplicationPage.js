import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";
import  Countries  from "../countries";
import { useState } from 'react'
import useForm from "../hooks/useForm";
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
    margin-left: 520px;
    margin-top: 50px;
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
    margin-left: 70px;
`

const H1 = styled.h1`
display:flex;
justify-content: center;
align-items: center;
margin-top: 0px;
margin-bottom: 5px;
padding: 50px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -10px; 
`

const Input = styled.input`
    width: 399px;
    height: 35px;
    border-radius: 10px;
    margin: 10px;
    padding: 20px;
`

const Select = styled.select`
    width: 400px;
    height: 30px;
    border-radius: 10px;
    padding: 20px;
`
const Div = styled.div`
    background-color: silver;
    height: 100vh; 
`




function ApplicationPage() {
    const [countries, setCountries] = useState([])
    const [form, Input, cleanInputs] = useForm({
        name:"",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
        tripId: ""
    })

    let navigate = useNavigate()

    const goToTripsPage = () => {
        navigate('/tripspage')
    }

    const sucess = () => {
        alert('Application sent successfully!')
    }


    const applyToTrip = (event) => {
        event.preventDefault()
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/trips/${form.tripId}/apply`, body)
        .then((res) => {
            alert("Inscrição realizada com sucesso!")
            cleanInputs();
        })
        .catch((err) => {
            alert("Não foi possível realizar a sua inscrição!", err.response.message)
        })



    const select = countries.map(c => {
        return (
            <option value={c.nome} key={c.nome}>{c.nome} </option>
        )
    }
    )


    return (
        <Div>
            <GlobalStyle />

            <H1>Sign up for a trip</H1>

            <Form onSubmit={applyToTrip}>

                <Select name={"tripId"} onChange={Input}>
                    <option value="" disabled>Escolha uma viagem</option>                
                </Select>

                <Input
                    name="name"
                    type="text"
                    value={form.name}
                    placeholder="Nome" 
                    onChange={Input}
                    />
                <Input
                    name="age"
                    type="number"
                    value={form.age}
                    placeholder="Idade"
                    onChange={Input} 
                    />
                <Input
                    name="Texto de candidatura"
                    type="text"
                    value={form.applicationText}
                    placeholder="Texto de candidatura" 
                    onChange={Input}
                    />
                <Input
                    name="Profissão"
                    type="text"
                    value={form.profession}
                    placeholder="Profissão" 
                    onChange={Input}
                    />

                <Select>
                    {select}
                </Select>

            <Button onClick={goToTripsPage}>Return</Button>
            <Button2 onClick={sucess}>Send</Button2>

            </Form>
        </Div>
    )
  }
}

export default ApplicationPage;