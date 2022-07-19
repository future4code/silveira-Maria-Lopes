import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'


const ImgBackground = styled.div`
    background-image: url('https://10619-2.s.cdn12.com/rests/original/105_512214190.jpg');
    background-repeat: no-repeat;
    background-size: 100vw;
    height: 92.8vh;
    opacity: 0.8;
`


export default function HomePage() {
    // const navigate = useNavigate();


    // const logout = () => {
    //     localStorage.removeItem("token");
    //     navigate('/login')
    // }

    return (
        <div>
            <ImgBackground>
               
            </ImgBackground>
        </div>
    )

}