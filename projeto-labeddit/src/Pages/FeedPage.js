import React, { useEffect, useState } from "react";
import axios from "axios";
import styledComponents from "styled-components";
import useProtectedPage from "../Hooks/useProtectedPage"
import { BASE_URL } from "../constants"




function FeedPage () {
const [posts, setPosts] = useState([])

    useProtectedPage();
    const token = localStorage.getItem('token')

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


    const postsCards = posts.map((post) => {
        return(
            <div>
                key={post.id}
                username={post.username}
                title={post.title}
                body={post.body}
                voteSum={post.voteSum}
                userVote={post.userVote}
                id={post.id}
                commentCount={post.commentCount}
            </div>
        )
    })
     


    return (
        <div>
            {postsCards}
        </div>
    )
}

export default FeedPage;