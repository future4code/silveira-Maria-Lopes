import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import useProtectedPage from "../../Hooks/useProtectedPage";
import useForm from "../../Hooks/useForm"
import { BASE_URL } from "../constants/constants";
import { useParams } from "react-router-dom";

const DivButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;
padding: 10px;
`
const ButtonEnviar = styled.button`
font: 15px arial, sans-serif;
height: 30px;
text-shadow: none;
border-style: outset;
border-color: pink;
border-radius: 10px;
cursor: pointer;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin-right: 50px;
}
`
const Inputs = styled.input`
width: 320px;
height: 30px;
display: flex;
flex-wrap: wrap;
padding: 10px;
margin-top: 15px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin-right: 45px;
    width: 290px;
}

`

// Dos comentários!

function PostDetailsForm() {
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
                <Inputs
                    name={"body"}
                    value={form.body}
                    onChange={InputChange}
                    type={"text"}
                    placeholder="Comentários"
                    required
                />
                <DivButton>
                    <ButtonEnviar type="submit">Enviar</ButtonEnviar>
                </DivButton>
            </form>
        </div>
    )
}

export default PostDetailsForm;