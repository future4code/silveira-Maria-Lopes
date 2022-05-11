import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import useProtectedPage from "../../Hooks/useProtectedPage";
import useForm from "../../Hooks/useForm"
import { BASE_URL } from "../constants/constants";
import { useParams } from "react-router-dom";



// Dos comentários!

function PostDetailsForm() {
    const  [form, InputChange, clear] = useForm({
        body: ""
    })

    const params = useParams();

    const createComments = (id, body, clear) => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        axios
            .post(`${BASE_URL}posts/${id}/comments`, body, headers)
            .then((res) => {
                alert(res.data)
                clear()
            })
            .catch((err) => {
                alert(err.res.data)
            })
    }


    const submitForm = (event) => {
        event.preventDefault()
        createComments(params.id, form, clear)
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input
                    name={"body"}
                    value={form.body}
                    onChange={InputChange}
                    type={"text"}
                    placeholder="Comentários"
                    required
                    />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default PostDetailsForm;