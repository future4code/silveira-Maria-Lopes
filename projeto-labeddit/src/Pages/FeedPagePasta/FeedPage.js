import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import useProtectedPage from "../../Hooks/useProtectedPage"
import { BASE_URL } from "../../constants"
import { useNavigate } from "react-router-dom";
import PostForm from "./PostForm";
import useForm from "../../Hooks/useForm";
import PostCard from "../../Components/PostCard"
import PostDetails from "../PostDetailsPage/PostDetails";


function FeedPage () {
    const [posts, setPosts] = useState([])

    let navigate = useNavigate();

    // Função de fazer Logout

    const logout = () => {
    localStorage.removeItem("token");
    navigate('/loginpage')
}

    useProtectedPage();

    const token = localStorage.getItem('token')


    // Para pegar os posts e fazer o map para serem renderizados na tela 
   
    const getPosts = () => {

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
        getPosts();
    }, [])

    // Requisição para like e deslike

    const postVote = (postId, direction) => {
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
            .post(`${BASE_URL}posts/${postId}/votes`, body, headers)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error.res)
            })
        }
        else if (direction === -1) {
            axios
            .put(`${BASE_URL}posts/${postId}/votes`, body, headers)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error.res)
            })
        }
        else {
            axios
            .delete(`${BASE_URL}posts/${postId}/votes`, body, headers)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error.res)
            })
        }
    }



    // Função para assim que clicar em um post, ver os detalhes.

        const cardDetails = (post) => {
            navigate(`/postdetails/${post.id}`)
        }

    // Map para aparecer os posts da requisição na tela

    const postsCards = posts.map((post) => {
        return(
            <div>
            <PostCard key={post.id} onClick={() => {cardDetails(post.id)}}
                 username={post.username}
                 title={post.title}
                 body={post.body}
                 voteSum={post.voteSum}
                 userVote={post.userVote}
                 id={post.id}
                 commentCount={post.commentCount}
                 postVote={postVote} 
                 />
                <button onClick={() => postVote}>Curtir</button>
                <button onClick={() => postVote}>Descurtir</button>
                <input placeholder="Comentário"/>
            </div>
        )
    })
  
    console.log(posts)
    return (
        <div>
            <button onClick={logout}>Logout</button>
            <PostForm />
            {posts && postsCards}
        </div>
    )
}

export default FeedPage;