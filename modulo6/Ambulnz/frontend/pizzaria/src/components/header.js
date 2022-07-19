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
`

const Button = styled.div`
display: flex;
margin-left: 980px;
justify-content: space-between;
/* align-items: flex-end; */
/* border-radius: 20px; */
gap: 0px 10px;
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