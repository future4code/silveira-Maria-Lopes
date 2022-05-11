import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import useProtectedPage from "../../Hooks/useProtectedPage";
import useForm from "../../Hooks/useForm"
import { BASE_URL } from "../constants/constants";
import { useParams } from "react-router-dom";
import PostCards from "../../Components/PostCard";
import { useNavigate } from "react-router-dom";
import PostDetailsForm from "./PostDetailsForm";
import CommentsCard from "../../Components/CommentsCard";
import Loading from "../../img/loading.gif";


const DivDetailsPage = styled.div`
display: flex;
justify-items: center;
align-items: center;
flex-direction: column;
`

const ImgLoading = styled.img`
height: 100px;
`

function PostDetails () {
    
    useProtectedPage();
    let navigate = useNavigate()
    const params = useParams()
    const token = localStorage.getItem('token')

    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
 
    const goToFeedPage = () => {
        navigate('/feedpage')
    }

    const getComentarios = () => {
        setIsLoading(true)

        axios
        .get(`${BASE_URL}posts/${params.id}/comments`, { 
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            setComments(res.data)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setIsLoading(false)
        })
    }

    const getPost = () => {

        const header = token

        axios
        .get(`${BASE_URL}posts`, { 
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            setPosts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getPost();
        getComentarios();
    }, [])

    // Função para pegar os comentários dos posts 

        const commentsVote = (commentId, direction) => {
            const headers = {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }

            const body = {
                direction: direction
            }

            if (direction === 1) {
                axios
                .post(`${BASE_URL}comments/${commentId}/votes`, body, headers)
                .then((res) => {
                    console.log(res)
                    getComentarios();
                })
                .catch((error) => {
                    console.log(error.res)
                })
            } else if (direction === -1) {
                axios
                .put(`${BASE_URL}comments/${commentId}/votes`, body, headers)
                .then((res) => {
                    console.log(res)
                    getComentarios();
                })
                .catch((error) => {
                    console.log(error.res)
                })
            } else {
                axios
                .delete(`${BASE_URL}comments/${commentId}/votes`, headers)
                .then((res) => {
                    console.log(res)
                    getComentarios();
                })
                .catch((error) => {
                    console.log({error}, "delete")

                })
            }
        }

       // Map para aparecer o id do post que eu clicar

       const postsMap = posts && posts.map((post) => {
           if (post.id === params.id)
        return(
            <PostCards
                key={post.id}
                username={post.username}
                title={post.title}
                body={post.body}
                voteSum={post.voteSum}
                userVote={post.userVote}
                id={post.id}
                commentCount={post.commentCount}
           />
        )
    })

     // Map dos comentários

     const commentsMap = comments && comments.map((comment) => {
         return(
             <div>
                <CommentsCard
                id={comment.id}
                key={comment.id}
                username={comment.username}
                body={comment.body}
                userVote={comment.userVote}
                commentsVote={commentsVote}
                voteSum={comment.voteSum}
                />
             </div>
         )
     })

    return (
        <DivDetailsPage>
        <button onClick={goToFeedPage}>Voltar</button>
        {postsMap}
        {commentsMap}
        <PostDetailsForm />
        {isLoading && <ImgLoading src={Loading} />}
        </DivDetailsPage>
    )
}

export default PostDetails;