import React, { useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PostDetailsForm from "../Pages/PostDetailsPage/PostDetailsForm";

const CommentsCards = styled.div`
  box-shadow: rgb(255, 255, 255) 0px 0px 0px 6px, rgb(0,  0, 0) 0px 0px 0px 9px;
  border-radius: 5px;
  min-height:20vh;
  width: 30vw;
  /* display: flex;
  justify-items: center;
  flex-direction: column; */
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
            <p><strong>Send by: {props.username}</strong></p>
            <p><strong>Title: {props.body}</strong></p>
            <button onClick={voteLike}>Curtir</button>
            <button onClick={voteDeslike}>Descurtir</button>
            <p>{props.voteSum}</p>
        </CommentsCards>
    )
}
