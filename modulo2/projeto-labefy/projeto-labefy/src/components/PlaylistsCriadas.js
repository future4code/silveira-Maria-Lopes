import React from "react";
import styled from "styled-components";
import axios from "axios";
import DetalhesPlaylist from "../components/DetalhesPlaylists";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {   
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

`

const headers = {
    headers: {
        Authorization: "Maria-Eduarda-Lopes-Silveira"
    }
}

const DivPlaylists = styled.div`
display: flex;
justify-content: center;
align-items: center;
justify-items:center;
height: 225px;
margin-top: 70px;

`

const H2 = styled.h2`
display: flex;
justify-content: center;
align-items: center;
justify-items:center;
margin-top: 30px;
margin-bottom: 30px;

`
const Ul = styled.ul`
display: flex;
border: 1px solid black;
justify-content: space-between;
width: 250px;
margin-bottom: 10px;
padding: 10px;

`

export default class PlaylistsCriadas extends React.Component {
    state = {
        quantidadePlaylists: 0,
        listaPlaylists: [],
        paginaAtual: 1,
        idPlaylist: ""        
    }

    componentDidMount() {
        this.pegarPlaylistCriada();
    }


    pegarPlaylistCriada = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
       
        axios.get(url, {
            headers: {
                Authorization: "Maria-Eduarda-Lopes-Silveira"
            }
        })
            .then((res) => {
                this.setState({
                    listaPlaylists: res.data.result.list
                })
            })
            .catch((err) => {
                alert(`Ocorreu um erro`)
            })

    }


    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}` 

        if (window.confirm(`Você realmente deseja excluir essa playlist? Pensa bem!`)) {
            axios
                .delete(url, headers)
                .then((res) => {
                    alert(`Playlist excluída com sucesso!`)
                    this.pegarPlaylistCriada();
                })
                .catch((err) => {
                    alert(`Vish, deu erro aqui. A playlist não foi excluída.`)
                })
        }


    }


    trocarDePagina = (id) => {
        if (this.state.paginaAtual === 1) {
            this.setState({
                paginaAtual: this.state.paginaAtual + 1,
                idPlaylist: id,
            })
        } else {
            this.setState({
                paginaAtual: this.state.paginaAtual - 1,
                idPlaylist: ""
            })
        }
    }




    render() {

        const minhasPlaylists = this.state.listaPlaylists.map((playlist) => {
            return <Ul onClick={() => this.trocarDePagina(playlist.id)} key={playlist.id}>
                          <li>{playlist.name}</li>
                <button onClick={() => this.deletarPlaylist(playlist.id)}>Deletar</button>
            </Ul>
        })


        return (

            <DivPlaylists>

                <GlobalStyle />
                   {this.state.paginaAtual === 1 ? 
                <div>
                    <H2>Lista de Playlists</H2>
                    {minhasPlaylists}
                    <button onClick={this.props.cadastrarPlaylist}>Voltar</button>
                </div> : <DetalhesPlaylist trocandoPagina={this.trocarDePagina} playlistId={this.state.idPlaylist} /> }
             

            </DivPlaylists>
        )
    }
}
