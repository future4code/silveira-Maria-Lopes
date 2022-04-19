import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { createGlobalStyle } from 'styled-components';
import Logo from '../img/logo.png.png'
import Heart from '../img/heart.png'
import Close from '../img/close.png'
import People from '../img/people.png'


const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`

const DivMatches = styled.div`
 display: flex;
 flex-direction: column;
 padding: 20px 20px 0px;
 `

const DivCaixinha = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
height: 66px;
box-shadow: 2px 2px 1px 1px darkgray; 
padding: 0px 5px;
    img {
        height: 90%;
        border: 40px;
        box-shadow: 2px 2px 2px 2px darkgray; 
    }
`

const DivContainer = styled.div`
border: 2px ridge black;
width: 403px;
height: 635px;
border-radius: 7px;
box-shadow: 2px 2px 6px silver;
background-color: ghostwhite;
margin-bottom: 40px;
margin-top: 10px;
`

const Button = styled.button`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 8px;
`

const DivPai = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
background-color: silver;    
`

const DivIcones = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
`

const LikeButton = styled.img`
height: 60px;
width: 60px;
cursor: pointer;
padding: 5px;
margin-bottom: -10px;

:active {
    position: relative;
    top: 3px;
}
-webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;
   :hover {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);}

`
const DeslikeButton = styled.img`
height: 50px;
width: 50px;
cursor: pointer;
padding: 5px;
margin-bottom: -10px;

:active {
    position: relative;
    top: 2px;
}
-webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;
   :hover {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);}
`

const ImgMatch = styled.img`
height: 400px;
width: 380px;
margin-top: 10px;
margin-left: 8px;
box-shadow: 2px 2px 1px 3px darkgray;
transition: transform .5s ease;
   :hover {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);}
`

const ImgButton = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin: 5px;
margin-bottom: 15px;
`

const ImgPeople = styled.img`
height: 60px;
width: 60px;
cursor: pointer;
overflow: hidden;
-webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;
   :hover {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);}
`

const DivTexto = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 10px;
font-size: 23px;
`
const DivBio = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 5px;
border-top: 2px solid #000;
`

const ImgLogo = styled.img`
width: 320px;
`

const DivTextoFinal = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
font-family: Georgia, 'Times New Roman', Times, serif;
margin-top: 120px;
margin-left: 12px;
`

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Maria-Eduarda-Lopes-Silveira/person"
const url2 = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Maria-Eduarda-Lopes-Silveira/choose-person"



function Home(props) {
    const [profile, setProfile] = useState({})


    useEffect(() => {
        getProfileToChoose()
    }, [])


    const getProfileToChoose = () => {
        axios
            .get(url)
            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch((err) => {
                alert("Puxa! Erro...")
            })
    }

    const choosePerson = (boolean) => {
        const headers = {
            "Content-Type": "application/json"
        }


        const body =
        {
            "id": profile.id,
            "choice": boolean
        }


        axios
            .post(url2, body, headers)
            .then((res) => {
                getProfileToChoose()
            })
            .catch((err) => {
                alert("Puxa! Erro...")
            })

    }



    return (
        <DivPai>
            <GlobalStyle />


            <DivContainer>
                <DivCaixinha>
                    <ImgLogo src={Logo} alt="Logo do app AstroMatch" />
                    <ImgPeople src={People} onClick={props.nextPage} />
                </DivCaixinha>


                <div>
                    {profile ?
                        <div>
                            <div>
                                <ImgMatch src={profile.photo} alt={profile.name} />
                                <DivTexto>
                                    <p>{profile.name}</p>
                                    <p>{profile.age}</p>
                                </DivTexto>

                                <DivBio>
                                    <p>{profile.bio}</p>
                                </DivBio>

                            </div>

                            <ImgButton>
                                <DeslikeButton src={Close} onClick={() => choosePerson(false)} />
                                <LikeButton src={Heart} onClick={() => choosePerson(true)} />
                            </ImgButton>

                        </div> :

                        <DivTextoFinal>
                            <h2>Caramba, não existem mais perfis! Que tal dar uma olhadinha em quem já combinou com você?
                                Você também tem a opção de limpar os matches e começar de novo!
                            </h2>
                            {/* <h3>Você também tem a opção de limpar os matches e começar novamente!</h3> */}
                        </DivTextoFinal>}
                </div>


                <Button onClick={props.resetar}>Limpar Matches</Button>


            </DivContainer>


        </DivPai>
    )

}


export default Home;

// spin depois do size faz o ícone girar
{/* <DivIcones>
                        <FontAwesomeIcon icon="fa-solid fa-fire" />
                        <FontAwesomeIcon icon={faFire} size="2x" />
                        <FontAwesomeIcon icon={faHome} size="2x" />
                        <FontAwesomeIcon icon={faPerson} size="2x" />
                    </DivIcones> */}

                    // ✔</img>>