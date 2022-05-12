import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import useForm from "../Hooks/useForm";
import useUnprotectedPage from "../Hooks/useUnprotectedPage";
import { signinpage } from "../services/users";

const H1 = styled.h1`
display: flex;
justify-content: center;
color: white;
font-family: Georgia, 'Times New Roman', Times, serif;
:hover 

{ background-color: #000000; 

transition: 0.8s;

opacity: 0.8;

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
padding: 5px;
background-image: url("");
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin-right: 36px;
}
`
const DivInputs = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 79.7vh;
padding: 15px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin-top: -30px;
}
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
    width: 280px;
    margin-right: 43px;
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
    gap: 70px;
}
`

const Button = styled.button`
font: 15px arial, sans-serif;
height: 30px;
text-shadow: none;
border-style: outset;
border-color: pink;
border-radius: 10px;
cursor: pointer;
`

function SignInPage () {
    let navigate = useNavigate();
    useUnprotectedPage();

    const [form, InputChange, clear] = useForm({
        username: "",
        email: "",
        password: ""
    })


    const goToLoginPage = () => {
        navigate('/loginpage')
    }


    const submitForm = (event) => {
        event.preventDefault();
        signinpage(form, clear, goToLoginPage);
    }


    return (
        <div>
             <DivHeader>
                <H1>LABEDDIT</H1>
             </DivHeader>

          <DivInputs>
            <form onSubmit={submitForm}>

            <Inputs
                name={"username"}
                value={form.username}
                onChange={InputChange}
                placeholder="UserName"
                type={"text"}
                required
            />    

            <Inputs 
                name={"email"}
                value={form.email}
                onChange={InputChange}
                placeholder="Email"
                type={"email"}
                required
            />

            <Inputs 
                name={"password"}
                value={form.password}
                onChange={InputChange}
                placeholder="Password"
                type={"password"}
                pattern={"^.{8,30}"}
                title={"A senha deve possuir no mínimo 8 e no máximo 30 caracteres."}
                required
            />
            <DivButton>
            <Button type="submit">Submit</Button>
            <Button onClick={goToLoginPage}>Voltar</Button>
            </DivButton>
            </form>

            </DivInputs>  
        </div>
    )
}

export default SignInPage;