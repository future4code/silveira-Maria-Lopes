import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import useProtectedPage from "../../Hooks/useProtectedPage"
import { BASE_URL } from "../constants/constants"
import { useNavigate } from "react-router-dom";
import PostForm from "./PostForm";
import PostCard from "../../Components/PostCard"
import Loading from "../../img/loading.gif";
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
    TelegramShareButton,
    TelegramIcon,
    EmailShareButton,
    EmailIcon
} from "react-share";

const DivShare = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 5px;
margin-top: 15px;
margin-right: 10px;
`
const ImgLoading = styled.img`
height: 160px;
margin-top: 10px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin-top: -40px;
    margin-right: 40px;
}
`
const DivLoading = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const DivFeedPage = styled.div`
display: flex;
justify-items: center;
align-items: center;
align-self: center;
flex-direction: column;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    min-width: 200px;
    position: relative;
  }
`
const ButtonLogout = styled.button`
margin-top: 5px;
font: 15px arial, sans-serif;
height: 30px;
text-shadow: none;
border-style: outset;
border-color: pink;
border-radius: 10px;
margin-top: -50px;
cursor: pointer;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 100px;
    margin-right: 30px;
  }
`
const DivFiltros = styled.div`
display: flex;
align-items: columns;
flex-direction: row;
justify-content: space-between;
margin-left: 850px;
padding: 5px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin-right: 880px;
    margin-bottom: 20px;
    position: relative;
  }
`
const InputFiltro = styled.input`
width: 100px;
height: 5px;
display: flex;
flex-wrap: wrap;
padding: 10px;
margin-top: 20px;
`
const P = styled.p`
margin-top: 20px;
font-size: 20px;
margin-right: 15px;
`
const DivHeader = styled.div`
display: flex;
justify-content: center;
align-self: center;
align-items: center;
height: 60px;
width: 99.1%;
background-color: rgb(205,92,92);
padding: 5px;
`
const H1 = styled.h1`
display: flex;
justify-content: center;
color: white;
font-family: Georgia, 'Times New Roman', Times, serif;
:hover 

{ background-color: #000000; 

transition: 0.8s;

opacity: 0.8;

}
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin-right: 36px;
}
`

const DivCardsFeed = styled.div`
display: grid;
grid-template-columns: 300px 300px 340px;
column-gap: 25px;
row-gap: 10px;
margin-top: -5px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

function FeedPage() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [filterPostTitulo, setFilterPostTitulo] = useState('')

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
        setIsLoading(true)

        axios
            .get(`${BASE_URL}posts`, {
                headers: {
                    Authorization: token
                }
            })
            .then((res) => {
                // console.log(res.data)
                setIsLoading(false)
                setPosts(res.data)
            })
            .catch((err) => {
                console.log(err)
                setIsLoading(false)
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
                    getPosts();
                    console.log(res)
                    alert("Post curtido com sucesso!")
                })
                .catch((error) => {
                    console.log(error.res)
                })
        }
        else if (direction === -1) {
            axios
                .put(`${BASE_URL}posts/${postId}/votes`, body, headers)
                .then((res) => {
                    getPosts();
                    console.log(res)
                    alert("Descurtido com sucesso!")
                })
                .catch((error) => {
                    console.log(error.res)
                })
        }
        else {
            axios
                .delete(`${BASE_URL}posts/${postId}/votes`, headers)
                .then((res) => {
                    getPosts();
                    console.log(res)
                })
                .catch((error) => {
                    console.log(error.res)
                })
        }
    }

    // Função para assim que clicar em um post, ver os detalhes.

    const cardDetails = (id) => {
        navigate(`/postdetails/${id}`)
    }

    // Map para aparecer os posts da requisição na tela

    const postsCards = posts && posts.filter((post) => {
        return post.title.includes(filterPostTitulo)
    })
        .map((post) => {
            return (
                <div>
                    <PostCard key={post.id} onClick={() => { cardDetails(post.id) }}
                        username={post.username}
                        title={post.title}
                        body={post.body}
                        voteSum={post.voteSum}
                        userVote={post.userVote}
                        id={post.id}
                        commentCount={post.commentCount}
                        postVote={postVote}
                    />
                </div>
            )
        })

    const shareUrl = "projeto-labeddit-eduarda.surge.sh";

    return (

        <div
            style={{
                background: '#0000',
            }
            }>

            <DivHeader>
                <H1>LABEDDIT</H1>
            </DivHeader>

            <DivShare>

                <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={40} round={true} />
                </FacebookShareButton>

                <WhatsappShareButton url={shareUrl}>
                    <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>

                <TwitterShareButton url={shareUrl}>
                    <TwitterIcon size={40} round={true} />
                </TwitterShareButton>

                <TelegramShareButton url={shareUrl}>
                    <TelegramIcon size={40} round={true} />
                </TelegramShareButton>

                <EmailShareButton url={shareUrl}>
                    <EmailIcon size={40} round={true} />
                </EmailShareButton>

            </DivShare>


            <DivFeedPage>
                <ButtonLogout onClick={logout}>Logout</ButtonLogout>

                <DivFiltros>
                    <P>Busca:</P>
                    <InputFiltro
                        type="text"
                        value={filterPostTitulo}
                        onChange={(ev) => setFilterPostTitulo(ev.target.value)}
                    />
                </DivFiltros>

                <PostForm />

                <DivCardsFeed>
                    {posts && postsCards}
                </DivCardsFeed>

                <DivLoading>
                    {isLoading && <ImgLoading src={Loading} />}
                </DivLoading>

                {/* {posts.array && (
                <Pagination
                    limit={LIMIT}
                    total={posts.array.length}
                    offset={offset}
                    setOffset={setOffset}
                />
            )} */}

            </DivFeedPage>
        </div>

    )
}

export default FeedPage;