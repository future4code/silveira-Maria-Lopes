import React from "react";
import axios from "axios";
import styled from "styled-components";
import useUnprotectedPage from "../Hooks/useUnprotectedPage";
import useForm from "../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import { login } from "../services/users";


const H1 = styled.h1`
display: flex;
justify-content: center;

`



function LoginPage () {
    const [form, InputChange, clear] = useForm({
        email: "",
        password: ""
    })


    useUnprotectedPage();
    let navigate = useNavigate()

    const goToFeedPage = () => {
        navigate('/feedpage')
    }

    const goToSignInPage = () => {
        navigate('/signinpage')
    }

    const submitLogin = (event) => {
        event.preventDefault();
        login(form, clear, goToFeedPage);
    }

  
    return (
        <div>

            <div>
                <H1>LABEDDIT</H1>
                <form onSubmit={submitLogin}>

                <input 
                name={"email"}
                value={form.email}
                onChange={InputChange}
                type={"email"}
                placeholder="Email"
                required
                />
            
                <input
                name={"password"}
                value={form.password}
                onChange={InputChange}
                type={"password"}
                placeholder="Password"
                required
                />
            
            <button type="submit">Entrar</button>
            <button onClick={goToSignInPage}>Cadastrar-se</button>
           
                </form>

                {/* <button onClick={goToFeedPage} type="submit">Entrar</button>
                <button onClick={goToSignInPage}>Cadastrar-se</button> */}
            </div>
        </div>
    )
}

export default LoginPage;