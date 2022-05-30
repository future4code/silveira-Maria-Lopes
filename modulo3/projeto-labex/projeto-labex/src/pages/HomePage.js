import React from "react";
import axios from "axios";
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import Space from '../images/space.png'
import { keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

`
const Ola = keyframes`
0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-300vw);
            transform: translateX(-300vw);
  }
`

const PlanoDeFundo = styled.div`
display: flex;
position: absolute;
top: 0;
left: 0;
width: 100vw;
overflow-x: hidden;
z-index: -1; 
height: 100%;
/* animation: ${Ola} 20s linear infinite none; */
img {
    height: 100%;
    width: 100vw;
    /* position: relative; */
}
div {
    opacity: 0.9;
    display: flex;
    width: 500vw;
    animation: ${Ola} 20s linear infinite none;
    z-index: -1;
}
`

const BackGround = styled.div`
color: blue;
min-height: 100vh;
position: relative;
width: 100vw;
/* z-index: -1; */
overflow-x: none;
`

const Button = styled.button`
color: #fff;
text-transform: uppercase;
font-size: 15px;
background: linear-gradient(45deg, rgb(255, 255, 111), rgb(0, 0, 128));
padding: 12px 30px;
border-radius: 30px;
border: none;
margin-left: 900px;
margin-top: 180px;
font-weight: bold;
cursor: pointer;
z-index: 1;
`

const Button2 = styled.button`
color: #fff;
text-transform: uppercase;
font-size: 15px;
background: linear-gradient(45deg, rgb(255, 255, 111), rgb(0, 0, 128));
padding: 12px 30px;
border-radius: 30px;
border: none;
margin-left: 880px;
margin-top: 80px;
font-weight: bold;
cursor: pointer;
z-index: 1;
`

const H1 = styled.h1`
display:flex;
justify-content: center;
align-items: center;
margin-top: 0px;
margin-bottom: 40px;
color: whitesmoke;
padding: 20px;
font-size: 50px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`

function HomePage() {

    let navigate = useNavigate()

    const goToTripsPage = () => {
        console.log("Testando!")
        navigate('/tripspage')
        
    }

    const goToLoginPage = () => {
        navigate('/loginpage')
    }


    return (
        <>
        <BackGround>
            <H1>LABE X</H1>
            <PlanoDeFundo>
                <div>
                <img src={"https://miro.medium.com/max/1080/1*633qaEEB_0BgSt4XESLJ1g.jpeg"} />
                <img src={"https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/possoexplicar_03marte.jpg?w=1600"} />
                <img src={"https://tm.ibxk.com.br/2019/03/12/12113740155096.jpg?ims=1120x420"} />
                <img src={"https://thumbs.dreamstime.com/b/fundo-espacial-infinito-com-nebulosas-e-estrelas-artes-ilustrativas-de-212380221.jpg"} />
                </div>
            </PlanoDeFundo>
            <GlobalStyle />

            <Button onClick={goToTripsPage}>Viagens</Button>
            <Button2 onClick={goToLoginPage}>Admin area</Button2>

        </BackGround>
        
        </>

    )
    }

export default HomePage;