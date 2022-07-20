import React, { useState } from "react";
import useForm from '../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from "../services/url";
import { useNavigate } from "react-router-dom";
import { goToMenuPage } from "../router/coordinator";
import { goToHomePage } from "../router/coordinator";
import styled from 'styled-components'


export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 55px;
  width: 100vw;
  height: 100%;
  background-color: green;
`;

export const InputsContainer = styled.div`
display: flex;
max-width: 250px;
align-items: center;
margin-bottom: 20px;
width: 80vw;
height: 60vh;
`;

export const Inputs = styled.input`
/* box-sizing: border-box 2px solid black; */
border-radius: 20px;
display: flex;
align-items: center;
align-self: center;
justify-content: center;
line-height: 2.5;
width: 240px;
`

export const SignUpButton = styled.button`
border-radius: 20px;
display: flex;
justify-self: center;
`

export default function SignUpPage() {
    const navigate = useNavigate();

    const [confirmPassword, setConfirmPassword] = useState("");
    const { form, InputChange, clear } = useForm({
        name: "",
        email: "",
        password: "",
    });

    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const onSubmitSignup = (event) => {
        event.preventDefault()

        if (form.password === confirmPassword) {
            axios.post(`${BASE_URL}createuser`, form)
                .then((resp) => {
                    console.log(resp.data.token)
                    localStorage.setItem('token', resp.data.token)
                    alert("Usuario criado!")
                    goToMenuPage(navigate)
                })
                .catch((err) => {
                    console.log({err})
                    alert("Erro ao criar usuário!")
                })
        }
        else {
            alert("As senhas não conferem!")
        }
    };

    return (
        <ScreenContainer>

            <InputsContainer>
                <form onSubmit={onSubmitSignup}>
                    <Inputs
                        placeholder="Name"
                        name="name"
                        value={form.name}
                        onChange={InputChange}
                        required
                    />

                    <Inputs
                        placeholder="Email"
                        name="email"
                        value={form.email}
                        onChange={InputChange}
                        required
                    />

                    <Inputs
                        placeholder="Password"
                        name="password"
                        value={form.password}
                        onChange={InputChange}
                        required
                        minLength="8"
                    />

                    <Inputs
                        placeholder="Confirm password"
                        name="password"
                        value={confirmPassword}
                        onChange={onChangeConfirmPassword}
                        required
                        minLength="8"
                    />

                    <SignUpButton type='submit'>Cadastrar</SignUpButton>

                </form>
            </InputsContainer>
        </ScreenContainer>
    )
}