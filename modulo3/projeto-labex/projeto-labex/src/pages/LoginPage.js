import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { createGlobalStyle } from "styled-components";
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
cursor: pointer;
margin-bottom: 20px;
`

const Input = styled.input`
width: 400px;
height: 40px;
border-radius: 10px;
margin: -10px;
display: flex;
justify-content: columns;
`
const H1 = styled.h1`
display:flex;
justify-content: center;
align-items: center;
padding: 30px;
`
const Div1 = styled.div`
height: 100%;
width: 98,5vw;
display: flex;
justify-content: center;
`
const Div2 = styled.div`
width: 600px;
height: 360px;
display:flex;
flex-direction: column;
background-color: whitesmoke;
align-items: center;
gap: 30px;
border: 3px solid black;
margin-top: 110px;
border-radius: 50px;
`
const DivButton = styled.div`
display:flex;
justify-content: center;
gap: 50px;
padding: 50px 0 20px 0;
width: 600px;
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

    const admin = () => {
        const token = localStorage.getItem("token");

        if (token) {
            navigate('/adminpage')
        }
    }





    const onSubmitLogin = () => {


        const body = {
            email: email,
            password: password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/Maria-Eduarda-Lopes-Silveira/login', body)
            .then((response) => {
                console.log('Deu certo aqui hein!', response.data)
                localStorage.setItem('token', response.data.token)
                navigate('/adminPage')
            }).catch((error) => {
                console.log('Deu errado aqui hein', error)
            })

       
    }

    useEffect(() => {
        admin()
    }, [])

    return (
        <Div1>
            <GlobalStyle />
            <Div2>
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

                <DivButton>
                    <Button onClick={goToHome}>Return</Button>
                    <Button onClick={onSubmitLogin}>Login</Button>
                </DivButton>

            </Div2>
        </Div1>
    )
}

export default LoginPage;