import React from "react";
import styled from "styled-components";
import axios from "axios";
import DetalhesPlaylist from "../components/DetalhesPlaylists";

const headers = {
    headers: {
        Authorization: "Maria-Eduarda-Lopes-Silveira"
    }
}




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
            return <ul onClick={() => this.trocarDePagina(playlist.id)} key={playlist.id}>
                          <li>{playlist.name}</li>
                <button onClick={() => this.deletarPlaylist(playlist.id)}>Deletar</button>
            </ul>
        })


        return (

            <div>
                   {this.state.paginaAtual === 1 ? 
                <div>
                    <h2>Lista de Playlists</h2>
                    {minhasPlaylists}
                    <button onClick={this.props.cadastrarPlaylist}>Voltar</button>
                </div> : <DetalhesPlaylist trocandoPagina={this.trocarDePagina} playlistId={this.state.idPlaylist} /> }
             

            </div>
        )
    }
}
