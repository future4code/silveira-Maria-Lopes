import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from "axios";


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
    margin-left: 550px;
    margin-top: 50px;
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
    margin-left: 40px;
    cursor: pointer;
`

const Input = styled.input`
    width: 400px;
    height: 35px;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    justify-content: columns;
    margin-left: 475px;
`
const H1 = styled.h1`
display:flex;
justify-content: center;
align-items: center;
margin-top: 200px;
margin-bottom: 40px;
`




function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }



    let navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }


    const onSubmitLogin = () => {

        navigate('/adminPage')

        const body = {
            email: email,
            password: password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/login', body)
            .then((response) => {
                console.log('Deu certo aqui hein!', response.data)
                localStorage.setItem('token', response.data.token)
            }).catch((error) => {
                console.log('Deu errado aqui hein', error)
            })
    }



    return (
        <div>
            <H1>Login</H1>

            <Input
                placeholder="email"
                type="email"
                value={email}
                onChange={onChangeEmail}
            />

            <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={onChangePassword}
            />

            <Button onClick={goToHome}>Return</Button>
            <Button2 onClick={onSubmitLogin}>Login</Button2>
        </div>
    )
}

export default LoginPage;