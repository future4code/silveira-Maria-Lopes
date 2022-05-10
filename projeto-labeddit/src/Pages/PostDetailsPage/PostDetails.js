import React, { useState, useEffect } from "react";
import axios from "axios";
import styledComponents from "styled-components";
import useProtectedPage from "../../Hooks/useProtectedPage";
import useForm from "../../Hooks/useForm"
import { BASE_URL } from "../../constants";
import { useParams } from "react-router-dom";
import PostCards from "../../Components/PostCard";
 


function PostDetails () {
    
    useProtectedPage();
    const params = useParams()
    const token = localStorage.getItem('token')

    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    // const postDetails = `${BASE_URL}posts/${params.id}/comments`


    const getComentarios = () => {
        const header = token

        axios
        .get(`${BASE_URL}posts/${params.id}/comments`, { 
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            console.log(res.data)
            setComments(res.data)
        })
        .catch((err) => {
            console.log(err)
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
            console.log(res.data)
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

        const getComments = (commentId, direction) => {
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
                })
                .catch((error) => {
                    console.log(error.res)
                })
            } else if (direction === -1) {
                axios
                .put(`${BASE_URL}comments/${commentId}/votes`, body, headers)
                .then((res) => {
                    console.log(res)
                })
                .catch((error) => {
                    console.log(error.res)
                })
            } else {
                delete(`${BASE_URL}comments/${commentId}/votes`, headers)
                .then((res) => {
                    console.log(res)
                })
                .catch((error) => {
                    console.log(error.res)
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
                // postVote={postVote}
           />
        )
    })

     // Map dos comentários

     const commentsMap = comments && comments.map((comment) => {
         return(
             <div>
                <h3>{comment.username}</h3>
                <p>{comment.body}</p>
             </div>
         )
     })

    return (
        <div>
        {postsMap}
        {commentsMap}
        </div>
    )
}

export default PostDetails;