import React from "react";
import axios from "axios";
import styledComponents from "styled-components";
import useUnprotectedPage from "../Hooks/useUnprotectedPage";
import useForm from "../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import { login } from "../services/users";



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
            <button onClick={goToSignInPage}>Sign In!</button>
           
                </form>

                {/* <button onClick={goToFeedPage} type="submit">Entrar</button>
                <button onClick={goToSignInPage}>Cadastrar-se</button> */}
            </div>
        </div>
    )
}

export default LoginPage;