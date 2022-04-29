import React from "react";
import axios from "axios";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import useForm from "../hooks/useForm";
import { createGlobalStyle } from "styled-components";
import { planets } from "../planets";
import { useEffect } from "react";


const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const H1 = styled.h1`
display: flex;
justify-content: center;
margin-top: 70px;
padding: 20px;
`

const InputEstilizado = styled.input`
    width: 500px;
    height: 40px;
    border-radius: 10px;
    margin: 10px;
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
    cursor: pointer;
    height: 50px;
    
`

// const Button2 = styled.button`
//     color: #fff;
//     text-transform: uppercase;
//     font-size: 15px;
//     background: linear-gradient(45deg, rgb(255, 255, 111), rgb(0, 0, 128));
//     padding: 12px 30px;
//     border-radius: 30px;
//     border: none;
//     font-weight: bold;
//     margin-left: 100px;
//     cursor: pointer;
// `

const Select = styled.select`
    width: 500px;
    height: 40px;
    border-radius: 10px;
`

const Div1 = styled.div`
background-color: silver;
height: 100%;
width: 98,5vw;
display: flex;
justify-content: center;
`

const DivButton = styled.div`
display:flex;
justify-content: center;
gap: 100px;
padding: 30px 0 20px 0;
/* background-color: black; */
width: 600px;

`

const Div2 = styled.div`
width: 600px;
height: 700px;
display:flex;
flex-direction: column;
background-color: pink;
align-items: center;
gap: 50px;
border: 10px solid black;
margin-top: 110px;
border-radius: 50px;
`
const useProtectedPage = () => {
    
    let navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token === null) {
            navigate("/loginpage")
        }

    }, [])
}

function CreateTripPage() {
    useProtectedPage();
    let navigate = useNavigate()

    const { form, Input, cleanInputs } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

   

    const goToAdminPage = () => {
        navigate('/adminpage')
    }

    const createTrip = (e) => {
        e.preventDefault()
        const headers = {
            headers: {
                // "Content-Type": "application/json",
                auth: localStorage.getItem("token")
            }
        }

        const body = form

        axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/trips', body, headers)
        .then((response) => {
            console.log(response)
            alert("Viagem criada com sucesso!")
            cleanInputs()
        })
        .catch((error) => {
            console.log(error.response.data)
        })
        console.log(form)
    }

    return (
        <Div1   >
            <GlobalStyle />
            <Div2>
            <H1>Criar Viagem</H1>

            <Form onSubmit={createTrip}>

                <InputEstilizado 
                    name={'name'}
                    type="text"
                    placeholder="Título da viagem"
                    value={form.name}
                    onChange={Input} 
                    required pattern={"^.{5,}"} 
                    title={"O nome deve ter no mínimo 5 letras."}
                />

                <Select name="planet" value={form.planet} onChange={Input}>
                    <option>Escolha um planeta!</option>
                    {planets.map((planet)=> {
                        return (
                            <option key={planet} value={planet}>{planet}</option>
                        )
                    })}
                </Select>

                <InputEstilizado
                    name={"date"}
                    placeholder="Data"
                    type="date" min={new Date().toISOString().slice(0, 10)} 
                    value={form.date}
                    onChange={Input}
                />

                <InputEstilizado
                    name="description"
                    type="text"
                    placeholder="Descrição"
                    value={form.description}
                    onChange={Input}
                    required pattern={"^.{30,}"} 
                    title={"A descrição deve ter no mínimo 30 caracteres."}
                />

                <InputEstilizado
                    name="durationInDays"
                    type="number"
                    placeholder="Duração em dias"
                    value={form.durationInDays}
                    onChange={Input}
                    required min={50}
                />

            <DivButton>
            <Button onClick={goToAdminPage}>Voltar</Button>
            <Button onClick={createTrip}>Criar</Button>
            </DivButton>

            </Form>

            </Div2>
        </Div1>
    )
}

export default CreateTripPage;