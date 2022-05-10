import React from "react";
import styled from "styled-components";
import axios from "axios";
import useProtectedPage from "../../Hooks/useProtectedPage";
import useForm from "../../Hooks/useForm"
import { BASE_URL } from "../../constants";
import { useParams } from "react-router-dom";

function CommentForm() {
    const [form, InputChange, clear] = useForm({
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
            .post(`${BASE_URL}posts${id}/comments`, body, headers)
            .then((res) => {
                alert(res.data)
                clear()
            })
            .catch((error) => {
                alert(err.res.data)
            })
    }

    const submitForm = (event) => {
        event.preventDefault()
        createComments(form, clear, params.id)
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input
                    name={"body"}
                    value={form.body}
                    onChange={InputChange}
                    type={"text"}
                    required
                />
            </form>
        </div>
    )
}