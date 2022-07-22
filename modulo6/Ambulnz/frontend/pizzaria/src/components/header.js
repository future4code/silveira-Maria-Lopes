import React from "react";
import styled from 'styled-components'
import { goToSignUpPage } from "../router/coordinator";
import { goToHomePage } from "../router/coordinator";
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from "../router/coordinator";
import { goToMenuPage } from "../router/coordinator";

const HeaderComponent = styled.div`
height: 10vh;
background-color: 	#1C1C1C;
display: flex;
align-items: center;
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
`

const Button = styled.div`
display: flex;
margin-left: 150vh;
justify-content: space-between;
/* align-items: flex-end; */
/* border-radius: 20px; */
gap: 0px 10px;

button {
    background-color: 	#1C1C1C;
    color: white;
    font-size: 15px;
    border: none;
    text-decoration: underline;
    cursor: pointer;
}


button:hover {
       font-size: 20px;
    }
`




export default function Header() {
    const navigate = useNavigate()

    return (

        <HeaderComponent>

            <Button>
                <button onClick={() => goToHomePage(navigate)}>Home</button>
                <button onClick={() => goToSignUpPage(navigate)}>Sign up</button>
                <button onClick={() => goToLoginPage(navigate)}>Login</button>
                <button onClick={() => goToMenuPage(navigate)}>Menu</button>
                <button onClick={() => []}>About</button>
                <button onClick={() => []}>Contact us</button>
            </Button>

        </HeaderComponent>

    )
}