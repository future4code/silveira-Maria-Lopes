import React from "react";
import axios from "axios";
import styledComponents from "styled-components";
import { useNavigate } from 'react-router-dom'
import useForm from "../Hooks/useForm";
import useUnprotectedPage from "../Hooks/useUnprotectedPage";
import { BASE_URL } from "../constants"



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

        const url = "https://labeddit.herokuapp.com/"
        const body = form
    
        axios
        .post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear();
            goToFeedPage();
        })
        .catch((error) => {
            alert(error.res.data)
        })
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
                required
            />
            
            {/* <button onClick={goToFeedPage} type={"submit"}>Submit</button> */}
            </form>
            <button onClick={goToFeedPage} type={"submit"}>Submit</button>

            </div>  
        </div>
    )
}

export default SignInPage;