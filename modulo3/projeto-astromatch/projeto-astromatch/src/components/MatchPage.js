import React, { useState, useEffect} from "react";
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

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0px;
}
`
const ImgHome = styled.img`
height: 70px;
width: 50px;
cursor: pointer;
overflow: hidden;
margin-right: -15px;
-webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;
   :hover {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);}
`

const ImgLogo = styled.img`
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
    width: 320px;
    margin-bottom: 10px;
    margin-left: -20px;
    display: flex;
    justify-content: space-evenly;

`

const DivPai = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
background-color: silver;  
`
const Button = styled.button`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const DivContainer = styled.div`
/* display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 45px; */
border: 2px ridge black;
width: 403px;
height: 700px;
border-radius: 7px;
box-shadow: 2px 2px 6px silver;
background-color: ghostwhite;
margin-bottom: 30px;
margin-top: 10px;
`

const DivCaixinha = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 10px;
width: 400px;
margin-top: 60px;
box-shadow: 2px 2px 1px 1px darkgray; 
padding: 0px 5px;
    img {
        height: 90%;
        border: 40px;
        box-shadow: 2px 2px 2px 2px darkgray; 
    }
`

const DivImg = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
position: relative;
height: 50px;
border-bottom: 1px solid silver;
padding: 0px 5px;
img {
    height: 100%;
}
margin-bottom: 60px;
`

const ImgMatch = styled.img`
height: 100%;
width: 50px;
margin-right: 10px;
border-radius: 50%;
`

const PersonMatch = styled.li `
display: flex;
position: relative;
height: 50px;
display: flex;
list-style: none;
width: 100%;
cursor: pointer;
margin-top: 10px;
margin-left: 5px;
-webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;
   :hover {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);}
`

const ImgBrokenHeart = styled.img`
height: 100px;
width: 100px;
display: flex;
justify-content:center;
align-items: center;
margin-top: 200px;
margin-left: 150px;
margin-bottom: 20px;

`

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
