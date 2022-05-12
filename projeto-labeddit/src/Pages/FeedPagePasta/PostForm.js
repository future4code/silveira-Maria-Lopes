import React, { useEffect, useState } from "react";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const DivInputs = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 30vh;
padding: 15px;

`
const InputTitle = styled.input`
width: 250px;
height: 20px;
border-radius: 5px;
display: flex;
flex-wrap: wrap;
padding: 5px;
margin-top: 8px;
margin-left: 56px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 180px;
}
`
const InputBody = styled.input`
width: 320px;
height: 30px;
border-radius: 5px;
display: flex;
flex-wrap: wrap;
padding: 25px;
margin-top: 5px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin-right: 50px;
    width: 250px;
}
`

const ButtonPostar = styled.button`
margin-left: 150px;
margin-top: 5px;
font: 15px arial, sans-serif;
height: 30px;
text-shadow: none;
border-style: outset;
border-color: pink;
border-radius: 10px;
cursor: pointer;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin-left: 120px;
}
`

const DivH3 = styled.div`
display: flex;
justify-content: center;
`
const H3 = styled.h3`
margin-bottom: -5px;
margin-right: 10px;
font: arial, sans-serif;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin-right: 50px;
}
`


function PostForm() {
    const [form, InputChange, clear] = useForm({
        title: "",
        body: ""
    })

    const token = localStorage.getItem('token')

    // Para criar Posts

    const createPost = (event) => {
        event.preventDefault();

        
        axios
        .post(`${BASE_URL}posts`, form, {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            alert("Post adicionado com sucesso!")
            clear();
        })
        .catch((error) => { 
            alert(error)
        })
    }

    return(
        <div>       <DivH3>
                    <H3>Escreva um post</H3>
                    </DivH3>
          <DivInputs>
              
            <form onSubmit={createPost}>
                <InputTitle
                placeholder="Titulo"
                name={"title"}
                value={form.title}
                onChange={InputChange}
                type={"text"}
                />

                <InputBody 
                placeholder="Escreva seu post..."
                name={"body"}
                value={form.body}
                onChange={InputChange}
                type={"text"}
                required
                />

            <ButtonPostar>Postar</ButtonPostar>
            </form>
          </DivInputs>
        </div>
    )
}

export default PostForm;