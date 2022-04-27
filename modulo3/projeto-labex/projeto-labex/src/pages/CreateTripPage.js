import React from "react";
import axios from "axios";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';



const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
`

const H1 = styled.h1`
display: flex;
justify-content: center;
margin-top: 70px;
padding: 20px;
`

const Input = styled.input`
    width: 500px;
    height: 30px;
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
    margin-top: 20px;
    margin-left: 500px;
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
    margin-left: 100px;
    cursor: pointer;
`

const Select = styled.select`
    width: 507px;
    height: 5px;
    border-radius: 10px;
    padding: 17px;
`



function CreateTripPage() {

    let navigate = useNavigate()

    const goToAdminPage = () => {
        navigate('/adminpage')
    }

    const tripOk = () => {
        alert('Viagem adicionada com sucesso!')
    }

    return (
        <div>
            <H1>Criar Viagem</H1>
            <Form>
                <Input />

                <Select>

                </Select>

                <Input
                    type="date"
                />

                <Input
                />

                <Input
                    type="number"
                />
            </Form>

            <Button onClick={goToAdminPage}>Voltar</Button>
            <Button2 onClick={tripOk}>Criar</Button2>
        </div>
    )
}

export default CreateTripPage;