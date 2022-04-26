import React from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

`


const Button = styled.button`
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    background: linear-gradient(45deg, rgb(255, 255, 111), rgb(0, 0, 128));
    padding: 12px 30px;
    border-radius: 30px;
    border: none;
    font-weight: bold;
    display: inline;    
    margin-left: 525px;
    margin-top: 100px;
`
const Button2 = styled.button`
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    background: linear-gradient(45deg, rgb(255, 255, 111), rgb(0, 0, 128));
    padding: 12px 30px;
    border-radius: 30px;
    border: none;
    font-weight: bold;
    margin-left: 30px;
`

const H1 = styled.h1`
display:flex;
justify-content: center;
align-items: center;
margin-top: 30px;
`

const Div = styled.div`
background-color: silver;
height: 100vh;
`

function TripsPage () {

    let navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    const goToApplicationPage = () => {
        navigate('/applicationpage')
    }

    return( 
        <Div>
            <GlobalStyle />
           <Button onClick={goToHome}>Return</Button>
           <Button2 onClick={goToApplicationPage}>Sign Up</Button2>
           <H1>Travel List</H1>
        </Div>
    )
}

export default TripsPage;