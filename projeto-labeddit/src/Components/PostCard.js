import React from "react";
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PostForm from "../Pages/FeedPagePasta/PostForm"

const DivCards = styled.div`
  box-shadow: rgb(255, 255, 255) 0px 0px 0px 3px, rgb(12, 193, 27) 0px 0px 0px 6px, rgb(255, 91, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px;
  border-radius: 5px;
  min-height:40vh;
  width: 37vw;
  /* display: flex;
  justify-items: center;
  flex-direction: column; */
`

export default function PostCards(props) {
   let navigate = useNavigate()

   const cardDetails = (post) => {
      navigate('/postdetails', post.id)
  }

   return (
      <DivCards>
         <p><strong>Send by: {props.username}</strong></p>
         <p><strong>Title: {props.title}</strong></p>
         <p><strong>Body: {props.body}</strong></p>
         <button onClick={props.onClick}>Detalhes</button>
      </DivCards>
   )
}
