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
color: white;
font-family: Georgia, 'Times New Roman', Times, serif;
:hover 

{ background-color: #000000; 

transition: 0.9s;

opacity: 0.9;

}
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin-right: 36px;
}
`
const DivHeader = styled.div`
display: flex;
justify-content: center;
align-self: center;
align-items: center;
height: 60px;
/* width: 100%; */
background-color: rgb(205,92,92);
padding: 7px;
background-image: url("");
`
const DivInputs = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 79.7vh;
padding: 15px;
background-image: url("https://static.vecteezy.com/ti/vetor-gratis/p2/3521677-social-network-concept-isolated-social-media-users-chat-like-post-in-mobile-app-people-scene-in-flat-cartoon-design-vector-illustration-for-blogging-website-mobile-materiais-promocionais-de-aplicativos-vetor.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`
const Inputs = styled.input`
width: 320px;
height: 30px;
border-radius: 10px;
display: flex;
flex-wrap: wrap;
padding: 5px;
margin-top: 8px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 250px;
    margin-right: 45px;
}
`
const DivButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;
padding: 10px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin-right: 40px;
}
`
const Button = styled.button`
font: 15px arial, sans-serif;
height: 30px;
text-shadow: none;
border-style: outset;
border-color: pink;
border-radius: 9px;
cursor: pointer;
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

            <DivInputs>

                <form onSubmit={submitLogin}>

                    <Inputs
                        name={"email"}
                        value={form.email}
                        onChange={InputChange}
                        type={"email"}
                        placeholder="Email"
                        required
                    />

                    <Inputs
                        name={"password"}
                        value={form.password}
                        onChange={InputChange}
                        type={"password"}
                        placeholder="Password"
                        required
                    />

                <DivButton>
                    <Button type="submit">Entrar</Button>
                    <Button onClick={goToSignInPage}>Cadastrar-se</Button>
                </DivButton>

                </form>
            </DivInputs>
        </div>
    )
}

export default LoginPage;