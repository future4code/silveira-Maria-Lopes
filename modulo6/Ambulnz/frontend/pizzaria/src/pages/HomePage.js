import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'


const ImgBackground = styled.div`
    background-image: url('https://s1.1zoom.me/b5050/219/Fast_food_Pizza_Tomatoes_Wood_planks_562796_1920x1080.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100vh;
    opacity: 0.8;
`

const DivTitle = styled.div`
display: flex;
flex-direction: column;
font-family: 'Bebas Neue', cursive;
color: white;
margin-left: 250px;

h1 {
font-size: 100px;
margin-top: -5px;
}

h2 {
margin-left: 20px;
margin-top: -50px;
}
`


export default function HomePage() {

    return (

        <ImgBackground>

            <DivTitle>
                <h1>Pizza</h1>
                <h2>HOT & FRESH</h2>
            </DivTitle>


            {/* 
            <div>
        <h1>Go pizza</h1>
            </div> */}
        </ImgBackground>
    )

}