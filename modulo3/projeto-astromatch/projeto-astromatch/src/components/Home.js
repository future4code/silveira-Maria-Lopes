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
import {
    DivMatches, DivCaixinha, DivContainer, Button, DivPai, DivIcones, LikeButton,
    DeslikeButton, ImgMatch, ImgButton, ImgPeople, DivBio, DivTexto, ImgLogo, DivTextoFinal
} from './stylesHome'


const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
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