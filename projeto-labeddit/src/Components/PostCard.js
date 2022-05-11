import React, { useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PostForm from "../Pages/FeedPagePasta/PostForm";
import Like from "../img/like.png"
import Deslike from "../img/deslike.png";

const DivCards = styled.div`
  box-shadow: rgb(255, 255, 255) 0px 0px 0px 3px, rgb(240,128,128) 0px 0px 0px 6px;
  border-radius: 5px;
  min-height:40vh;
  width: 37vw;
  margin: 15px;
`

const IMG = styled.img`
height: 50px;
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
         <p><strong>Send by: {props.username}</strong></p>
         <p><strong>Title: {props.title}</strong></p>
         <p><strong>Body: {props.body}</strong></p>
         </div>
         <IMG src={Like} onClick={voteLike} />
         <IMG src={Deslike} onClick={voteDeslike} />
         {props.voteSum === null ? 0 : props.voteSum}
      </DivCards>
   )
}
