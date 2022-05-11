import React, { useState } from "react";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../constants/constants"



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

    // const submitForm = (event) => {
    //     event.preventDefault();
    //     createPost(form, clear)
    // }

    return(
        <div>
            
            <form onSubmit={createPost}>
                <input 
                placeholder="Titulo"
                name={"title"}
                value={form.title}
                onChange={InputChange}
                type={"text"}
                />

                <input 
                placeholder="Escreva seu post..."
                name={"body"}
                value={form.body}
                onChange={InputChange}
                type={"text"}
                required
                />

            <button>Postar</button>
            </form>
        </div>
    )
}


export default PostForm;