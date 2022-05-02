import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";
import { countries } from "../countries";
import { useState, useEffect } from 'react'
import useForm from "../hooks/useForm";
import axios from "axios";
import TripsPage from "./TripsPage";

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
margin-top: 10px;  
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
cursor: pointer;
margin-top: 10px;
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
const InputEstilizado = styled.input`
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
`
const Div = styled.div`
background-color: whitesmoke;
height: 100vh; 
`
const DivButton = styled.button`
display:flex;
justify-content: center;
gap: 70px;
padding: 20px 10 20px 0;
background-color: black;
width: 400px;
margin-top: 5px;
height: 65px;
`

function ApplicationPage() {
  const [tripsList, setTripsPage] = useState([])
  const [idTrip, setIdTrip] = useState("")
  const { form, Input, cleanInputs } = useForm({
        name:"",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
        // tripId: ""
    })

    useEffect(() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/trips')
            .then((response) => {
                setTripsPage(response.data.trips)
                console.log(response.data)
            }).catch((error) => {
                console.log(error.response)
            })
    }, [])

    let navigate = useNavigate()

    const goToTripsPage = () => {
        navigate('/tripspage')
    }

    const applyToTrip = (event) => {
        event.preventDefault()
        const body = form
        console.log(body)
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/trips/${idTrip}/apply`, body)
        .then((res) => {
            alert("Inscrição realizada com sucesso!")
            cleanInputs();
        })
        .catch((err) => {
            alert("Não foi possível realizar a sua inscrição!", err.response.message)
        })
    }


    const select = countries.map(c => {
        return (
            <option value={c.nome} key={c.nome}>{c.nome} </option>
        )
    }
    )

    const onChangeSelect = (e) => {
        setIdTrip(e.target.value)
    }

    return (
        <Div>
            <GlobalStyle />

            <H1>Inscreva-se para uma viagem</H1>

            <Form onSubmit={applyToTrip}>

                <Select name={"tripId"}
                        onChange={onChangeSelect} value ={idTrip}required>
                    <option value="" disabled>Escolha uma viagem</option> 
                  {tripsList.map((trip) => {
                      return (
                          <option key={trip.id} value={trip.id}>{trip.name}</option>
                      )
                  })
                  }
                </Select>

                <InputEstilizado
                    name={"name"}
                    type="text"
                    value={form.name}
                    placeholder="Nome" 
                    onChange={Input}
                    pattern={'^.{4,}$'}
                    title='O nome tem que ter no minimo 4 letras'  
                    required
                />

                <InputEstilizado
                    name={"age"}
                    type="number"
                    value={form.age}
                    placeholder="Idade"
                    onChange={Input} 
                    min={18} 
                    max={80}     
                    title="Idade entre 18 e 80 anos"           
                    required
                    />

                <InputEstilizado
                    name={"applicationText"}
                    type="text"
                    value={form.applicationText}
                    placeholder="Texto de candidatura" 
                    onChange={Input}
                    pattern={"^.{30,}$"}
                    title='Sua descrição precisa no minimo 30 caracteres.'
                    required
                    />

                <InputEstilizado
                    name={"profession"}
                    type="text"
                    value={form.profession}
                    placeholder="Profissão" 
                    onChange={Input}
                    pattern={'^.{4,}$'}
                    title='Sua profissao tem que ter no minimo 4 caracteres'
                    required
                    />

                <Select name={"country"} 
                    value={form.country}
                    onChange={Input}>
                    <option value=""
                    disabled>Escolha um país</option>  
                    {select}              
                </Select>

            <DivButton>
            <Button onClick={goToTripsPage}>Voltar</Button>
            <Button2 onClick={applyToTrip}>Enviar</Button2>
            </DivButton>

            </Form>
        </Div>
    )
  }



export default ApplicationPage;