import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";
import  Countries  from "../countries";
import { useState } from 'react'

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

    let navigate = useNavigate()

    const goToTripsPage = () => {
        navigate('/tripspage')
    }

    const sucess = () => {
        alert('Application sent successfully!')
    }

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
            <Form>

                <Select>
                <option value="" disabled selected>Selecione...</option>
                </Select>

                <Input
                    value=''
                    placeholder="Nome" />
                <Input
                    placeholder="Idade" />
                <Input
                    placeholder="Texto de candidatura" />
                <Input
                    placeholder="Profissão" />

                <Select>
                    {select}
                </Select>

            </Form>
            <Button onClick={goToTripsPage}>Return</Button>
            <Button2 onClick={sucess}>Send</Button2>
        </Div>
    )
}

export default ApplicationPage;