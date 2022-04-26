import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'


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
    margin-left: 550px;
    margin-top: 50px;
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
    margin-left: 40px;
`

const Input = styled.input`
    width: 400px;
    height: 35px;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    justify-content: columns;
    margin-left: 475px;
`
const H1 = styled.h1`
display:flex;
justify-content: center;
align-items: center;
margin-top: 200px;
margin-bottom: 40px;
`




function AdminPage() {

    let navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    const sucess = () => {
        alert('Application sent successfully!')
    }

    return( 
        <div>
            <H1>Login</H1>

            <Input />
            <Input />

           <Button onClick={goToHome}>Return</Button>
           <Button2>Login</Button2>
        </div>
    )
}

export default AdminPage;