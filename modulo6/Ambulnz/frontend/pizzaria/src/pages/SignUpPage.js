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
`;

export const InputsContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 450px;
align-items: center;
margin-bottom: 20px;
width: 80vw;
`;

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
                    <input
                        placeholder="Name"
                        name="name"
                        value={form.name}
                        onChange={InputChange}
                        required
                    />

                    <input
                        placeholder="Email"
                        name="email"
                        value={form.email}
                        onChange={InputChange}
                        required
                    />

                    <input
                        placeholder="Password"
                        name="password"
                        value={form.password}
                        onChange={InputChange}
                        required
                        minLength="8"
                    />

                    <input
                        placeholder="Confirm password"
                        name="password"
                        value={confirmPassword}
                        onChange={onChangeConfirmPassword}
                        required
                        minLength="8"
                    />

                    <button type='submit'>Cadastrar</button>

                </form>
            </InputsContainer>
        </ScreenContainer>
    )
}