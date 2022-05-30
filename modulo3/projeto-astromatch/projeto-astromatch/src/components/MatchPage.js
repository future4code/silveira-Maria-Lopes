import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { createGlobalStyle } from 'styled-components';
import Logo from '../img/logo.png.png'
import Home from '../img/home.png.png'
import BrokenHeart from '../img/broken-heart.png.png'
import {
    ImgHome, ImgLogo, DivPai, Button, DivContainer, DivCaixinha,
    DivImg, ImgMatch, PersonMatch, ImgBrokenHeart
} from './stylesMatch'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0px;
}

// const ImgBrokenHeart = styled.img`
// height: 100px;
// width: 100px;
// display: flex;
// justify-content:center;
// align-items: center;
// margin-top: 200px;
// margin-left: 150px;
// margin-bottom: 20px;

// `

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Maria-Eduarda-Lopes-Silveira/matches"


function MatchPage(props) {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [matches])


    const getMatches = () => {
        axios
            .get(url)
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
                alert("Puxa! Erro...")
            })
    }

    const matchesList = matches.map((match) => {
        return (
            <ul>
                <PersonMatch>
                    <ImgMatch src={match.photo} alt={match.name} />
                    <p>{match.name}</p>
                </PersonMatch>
            </ul>
        )
    })


    return (
        <DivPai>
            <GlobalStyle />

            {/* {matchesList} */}

            <DivContainer>

                <DivCaixinha>

                    <DivImg>
                        <ImgLogo src={Logo} alt="Logo do app AstroMatch" />
                        <ImgHome src={Home} onClick={props.backPage} />
                    </DivImg>


                </DivCaixinha>

                <div>

                    {matchesList.length > 0 ? matchesList :
                        <div>
                            <ImgBrokenHeart src={BrokenHeart} />
                            <p>Puxa! Você ainda não possui nenhum match, mas vamos mudar isso? </p>
                        </div>}

                </div>
            </DivContainer>
        </DivPai>
    )

}

export default MatchPage;
