import React, { useEffect } from "react";
import styled from 'styled-components';
import Like from "../img/like.png"
import Deslike from "../img/deslike.png";

const CommentsCards = styled.div`
  box-shadow: rgb(255, 255, 255) 0px 0px 0px 6px, rgb(0,  0, 0) 0px 0px 0px 8px;
  border-radius: 2px;
  min-height: 10vh;
  width: 30vw;
  line-height: 5px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
   width: 65vw;
   margin-right: 43px;
}

`
const Paragrafo = styled.p`
line-height: 5px;
padding: 5px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
line-height: 1px;
}

`
const H4 = styled.h4`
line-height:10px;
padding: 5px;
text-decoration: underline black;  
`
const IMG = styled.img`
height: 30px;
cursor: pointer;
`
const DivImg = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
`

export default function CommentsCard(props) {

    const voteLike = () => {
        if(props.userVote === 1) {
           props.commentsVote(props.id)
        }
        else {
           props.commentsVote(props.id, 1)
        }
     }
    
     const voteDeslike = () => {
        if(props.userVote === -1) {
           props.commentsVote(props.id)
        }
        else {
           props.commentsVote(props.id, -1)
        }
     }
    
    return(
        <CommentsCards>
            <H4><strong>Enviado por:</strong> {props.username}</H4>
            <Paragrafo>{props.body}</Paragrafo>

            <DivImg>
            <IMG src={Like} onClick={voteLike} />
            <IMG src={Deslike} onClick={voteDeslike} />
            <p>{props.voteSum}</p>
            </DivImg>
        </CommentsCards>
    )
}
