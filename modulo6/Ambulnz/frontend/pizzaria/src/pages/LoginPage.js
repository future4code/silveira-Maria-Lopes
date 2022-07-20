import React, { useState } from "react";
import useForm from '../hooks/useForm';
import axios from 'axios';
import styled from 'styled-components'
import { BASE_URL } from "../services/url";
import { goToSignUpPage } from "../router/coordinator";
import { goToMenuPage } from "../router/coordinator";
import { useNavigate } from "react-router-dom";
import './login.css'


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


export default function LoginPage() {
    const navigate = useNavigate();

    const { form, InputChange, clear } = useForm({
        email: "",
        password: ""
    })


    const login = (event) => {
        console.log('oie')
        event.preventDefault();
        const body = form

        axios
            .post(`${BASE_URL}login`, body)
            .then((res) => {
                // console.log(res.data.token)
                localStorage.setItem('AuthToken', res.data.token)
                alert("Bem vindo!")
                goToMenuPage(navigate);
            //     if (res.data.user === false) {
            //         alert(
            //             `${res.data.user.name}, you do not have an account. We will redirect you...`
            //         );
            //         goToSignUpPage(navigate);
            //     } else {
            //         alert("Bem vindo!")
            //         goToMenuPage(navigate);
            //     }
            //     clear();
            })
            .catch((error) => {
                console.log(error)
                alert("Usuário não encontrado")
            })
    }

    return (
        // <ScreenContainer>

        //     <InputsContainer>
        //         <form onSubmit={login}>
        //             <input
        //     name={"email"}
        //     value={form.email}
        //     onChange={InputChange}
        //     type={"email"}
        //     placeholder="Email"
        //     required
        // />

        // <input
        //     name={"password"}
        //     value={form.password}
        //     onChange={InputChange}
        //     type={"password"}
        //     placeholder="Password"
        //     required
        // />

        //             <button type='submit'>Entrar</button>
        //         </form>
        //     </InputsContainer>
        // </ScreenContainer>

        <div className="container">

            <div className="container-login">

                <div className="wrap-login">

                    <form className="login-form" onSubmit={login}>
                        <span className="login-form-title">Bem vindo!</span>
                  

                    <div className="wrap-input">
                        <input className='input' name={"email"}
                            value={form.email}
                            onChange={InputChange}
                            type={"email"}
                            placeholder="Email"
                            required />
                        <span className="focus-input"></span>
                    </div>

                    <div className="wrap-input">
                        <input className='input' name={"password"}
                            value={form.password}
                            onChange={InputChange}
                            type={"password"}
                            placeholder="Password"
                            required />
                        <span className="focus-input"></span>
                    </div>


                    <div className="container-login-form-btn">
                        <button className="login-form-btn" type='submit'>Login</button>
                    </div>

                    <div className="text-center">
                        <span className="text1">Não possui conta?</span>

                        <a className="text2" href='#' onClick={() => goToSignUpPage(navigate)}>Criar conta</a>
                    </div>

                    </form>
                </div>

            </div>

        </div>
    )
}