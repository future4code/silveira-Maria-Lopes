import React from "react";
import styled from "styled-components";
import axios from "axios";



export default class AdicionaMusicaPlaylist extends React.Component{
    
    state = {
        nomeMusica: "",
        artista: "",
        url: ""
    }


    adicionarMusica = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
        const body = {
            name: this.state.nomeMusica,
            artist: this.state.artista,
            url: this.state.url
        }
        axios.post(url, body, {
            headers:{
                Authorization: "Maria-Eduarda-Lopes-Silveira"
            }
        })
        .then((res) => {


        })
        .catch((err) => {

            
        })
    }




    render() {
        return(
            <div>
                Oi 
            </div>
        )
    }
}