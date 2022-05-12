import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Gif from '../img/error.gif'

const GifDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 10vh;
` 

const Error = () => {
    const navigate = useNavigate()

    const goToLoginPage = () => {
        navigate('/loginpage')
    }

    return (
        <GifDiv>
            <img src={Gif} alt='gif' width='497px' />
            <button onClick={(goToLoginPage)}>FeedPage</button>
        </GifDiv>
    );
}
export default Error;