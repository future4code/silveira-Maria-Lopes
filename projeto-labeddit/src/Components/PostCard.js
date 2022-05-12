import React, { useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PostForm from "../Pages/FeedPagePasta/PostForm";
import Like from "../img/like.png"
import Deslike from "../img/deslike.png";

const DivCards = styled.div`
  box-shadow: rgb(255, 255, 255) 0px 0px 0px 3px, rgb(240,128,128) 0px 0px 0px 5px;
  border-radius: 5px;
  min-height:30vh;
  width: 37vw;
  margin: 15px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 80vw;
    margin-left: -30px;
    min-height: 25vh;
}
`
const IMG = styled.img`
height: 50px;
cursor: pointer;
`
const DivImg = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
`
const H4 = styled.h4`
line-height:20px;
padding: 5px;
text-decoration: underline black;  
`
const Paragrafo = styled.p`
line-height: 5px;
padding: 5px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
   line-height: 17px;
}
`
export default function PostCards(props) {
   let navigate = useNavigate()

   const cardDetails = (post) => {
      navigate('/postdetails', post.id)
  }

   const voteLike = () => {
      if(props.userVote === 1) {
         props.postVote(props.id)
      }
      else {
         props.postVote(props.id, 1)
      }
   }

   const voteDeslike = () => {
      if(props.userVote === -1) {
         props.postVote(props.id)
      }
      else {
         props.postVote(props.id, -1)
      }
   }

   return (
      
      <DivCards>
         <div onClick={props.onClick}>
         <H4><strong>Enviado por:</strong> {props.username}</H4>
         <Paragrafo><strong>Título:</strong> {props.title}</Paragrafo>
         <Paragrafo><strong>Mensagem:</strong> {props.body}</Paragrafo>
         </div>

         <DivImg>
         <IMG src={Like} onClick={voteLike} />
         <IMG src={Deslike} onClick={voteDeslike} />
         {props.voteSum === null ? 0 : props.voteSum}
         </DivImg>

      </DivCards>
   )
}
