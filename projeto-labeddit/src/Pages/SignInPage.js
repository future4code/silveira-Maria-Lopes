import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import useForm from "../Hooks/useForm";
import useUnprotectedPage from "../Hooks/useUnprotectedPage";
import { BASE_URL } from "../Pages/constants/constants";
import { signinpage } from "../services/users";



function SignInPage () {
    let navigate = useNavigate();
    useUnprotectedPage();

    const [form, InputChange, clear] = useForm({
        username: "",
        email: "",
        password: ""
    })


    const goToFeedPage = () => {
        navigate('/feedpage')
    }


    const submitForm = (event) => {
        event.preventDefault();
        signinpage(form, clear, goToFeedPage);
    }


    return (
        <div>

          <div>
            <form onSubmit={submitForm}>

            <input
                name={"username"}
                value={form.username}
                onChange={InputChange}
                placeholder="UserName"
                type={"text"}
                required
            />    

            <input 
                name={"email"}
                value={form.email}
                onChange={InputChange}
                placeholder="Email"
                type={"email"}
                required
            />

            <input 
                name={"password"}
                value={form.password}
                onChange={InputChange}
                placeholder="Password"
                type={"password"}
                pattern={"^.{8,30}"}
                title={"A senha deve possuir no mínimo 8 e no máximo 30 caracteres."}
                required
            />
            
            <button type="submit">Submit</button>
            </form>

            </div>  
        </div>
    )
}

export default SignInPage;