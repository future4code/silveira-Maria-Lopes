import React from "react";
import axios from "axios";
import styled from "styled-components";
import useUnprotectedPage from "../Hooks/useUnprotectedPage";
import useForm from "../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import { login } from "../services/users";
import { Button } from "@material-ui/core";


const H1 = styled.h1`
display: flex;
justify-content: center;
`
const DivHeader = styled.div`
display: flex;
justify-content: center;
align-self: center;
align-items: center;
height: 100%;
width: 100%;
background-color: #e9967a;
`

function LoginPage() {
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
            <DivHeader>
                <H1>LABEDDIT</H1>
            </DivHeader>

            <div>

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

                    <Button type="submit">Entrar</Button>
                    <Button onClick={goToSignInPage}>Cadastrar-se</Button>

                </form>
            </div>
        </div>
    )
}

export default LoginPage;