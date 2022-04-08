import React from "react";
import styled from "styled-components";
import axios from "axios";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {   
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

`
const Div = styled.div`
height: 185px;

`


const DetalhesMusicas = styled.div`
display: grid;
grid-template-rows: 100px 100px 10px;
text-align: center;
justify-content: center;

`

const PName = styled.p `
font-size: 25px;
margin-top: 5px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
color: gray;
display: flex;
justify-content: center;
margin-bottom: 30px;
`

const PArtista = styled.p `
font-size: 40px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
display: flex;
justify-content: center;
margin-top: -20px;
`

const Video = styled.iframe`
display: flex;
justify-content: center;
margin-left: 40px;
margin-bottom: 15px;
border: 0;

`



export default class DetalhesPlaylists extends React.Component{
    state = {
        detalheDaPlaylist: [],
        nomeMusica: "",
        artista: "",
        url: ""
    }

    componentDidMount () {
        this.detalhesPlaylist();
    }


    onChangeNome = (event) => {
        this.setState({
            nomeMusica: event.target.value
        })
    }

    onChangeArtista = (event) => {
        this.setState({
            artista: event.target.value
        })
    }

    onChangeUrl = (event) => {
        this.setState({
            url: event.target.value
        })
    }


    adicionarMusica = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`
        const body = {
            name: this.state.nomeMusica,
            artist: this.state.artista,
            url: this.state.url
        }
        axios.post(url, body, {
            headers: {
                Authorization: "Maria-Eduarda-Lopes-Silveira"
            }
        })
            .then((res) => {
                alert("Oba! Música adicionada com sucesso!")
                this.detalhesPlaylist();
            })
            .catch((err) => {
                alert("Puxa! Não foi possível adicionar a música na playlist!")
            })         
    }



    detalhesPlaylist = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`

        axios.get(url, {
            headers: {
                Authorization: "Maria-Eduarda-Lopes-Silveira"
            }
        })
        .then((res) => {
            this.setState({
                detalheDaPlaylist: res.data.result.tracks
            })

        })
        .catch((err) =>{
            alert("Ops, um erro!")
        })
    }




    render() {
        
        const detalhes = this.state.detalheDaPlaylist.map((detalhe) => {
            return <div key={detalhe.id}>
                          <PArtista>{detalhe.artist}</PArtista>
                          <PName>{detalhe.name}</PName>
                          <Video width="560" height="315" 
                          src={detalhe.url}
                          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>

                   </div>
        })

console.log(this.state.detalheDaPlaylist)
        return(

            <Div>
                <GlobalStyle />

                {detalhes}
                <button onClick={this.props.trocandoPagina}>Voltar</button>
                
                <input
                    placeholder="Nome da música"
                    value={this.state.nomeMusica}
                    onChange={this.onChangeNome}
                />

                <input
                    placeholder="Artista"
                    value={this.state.artista}
                    onChange={this.onChangeArtista}
                />

                <input
                    placeholder="URL da música"
                    value={this.state.url}
                    onChange={this.onChangeUrl}
                />
                <button onClick={this.adicionarMusica}>Adicionar Música</button>

            </Div>
        )
    }
}