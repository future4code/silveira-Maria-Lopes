import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import useProtectedPage from "../Hooks/useProtectedPage"
import { BASE_URL } from "../constants"
import { useNavigate } from "react-router-dom";
import useForm from "../Hooks/useForm";



function FeedPage () {
    const [posts, setPosts] = useState([])
    const [form, InputChange, clear] = useForm({
        title: "",
        body:""
    })

    let navigate = useNavigate();
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

    // Para criar Posts

    const createPost = (event) => {
        event.preventDefault();

        
        axios
        .post(`${BASE_URL}posts`, form, {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            alert("Post adicionado com sucesso!")
            clear();
        })
        .catch((error) => { 
            alert(error)
        })
    }



    const postsCards = posts.map((post) => {
        return(
            <div key={post.id}
                 username={post.username}
                 title={post.title}
                 body={post.body}
                 votesum={post.voteSum}
                 userVote={post.userVote}
                 id={post.id}
                 commentCount={post.commentCount}
            />
        )
    })

    // const postsCriados = postsCriados.map((postCriado) => {
    //     return (
    //         <div key={postCriado.id}>
    //             <h2>Enviado por: {postCriado.username}</h2>
    //             <p>{postCriado.title}</p>
    //             <p>{postCriado.body}</p>
    //             <button>Curtir</button>
    //             <button>Descurtir</button>
    //             <button>Comentários</button>
    //         </div>
    //     )
    // })
     


    return (
        <div>
            <button onClick={logout}>Logout</button>

            <form onSubmit={createPost}>
                <input 
                placeholder="Titulo"
                name={"title"}
                value={form.title}
                onChange={InputChange}
                type={"text"}
                />

                <input 
                placeholder="Escreva seu post..."
                name={"body"}
                value={form.body}
                onChange={InputChange}
                type={"text"}
                required
                />

            <button>Postar</button>
            </form>


            {/* {postsCriados} */}
            {postsCards}
        </div>
    )
}

export default FeedPage;