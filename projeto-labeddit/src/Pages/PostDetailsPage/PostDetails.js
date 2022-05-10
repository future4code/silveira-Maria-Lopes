import React, { useState } from "react";
import axios from "axios";
import styledComponents from "styled-components";
import useProtectedPage from "../../Hooks/useProtectedPage";
import useForm from "../../Hooks/useForm"
import { BASE_URL } from "../../constants";
import { useParams } from "react-router-dom";


function PostDetails () {
    const [posts, setPosts] = useState([])
    useProtectedPage();
    

    // Função para pegar os comentários dos posts 

        const getComments = (postId) => {
        const token = localStorage.getItem('token')

        axios
        .get(`${BASE_URL}posts/{postId}/comments`, {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            alert("Error!")
        })
    }

       // Map para aparecer os comentários

       const postsComments = posts.map((post) => {
        return(
            <div>
                
                
            </div>
        )
    })

    return (
        <div>
              Hello! I'm the PostDetailsPage!
        </div>
    )
}

export default PostDetails;