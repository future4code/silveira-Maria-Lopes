import React from "react";
import styled from "styled-components";
import axios from "axios";
import AdicionaMusicaPlaylist from "./AdicionaMusicaPlaylist";



export default class DetalhesPlaylists extends React.Component{
    state = {
        detalheDaPlaylist: [],
    }

    componentDidMount () {
        this.detalhesPlaylist();
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
                          <p>{detalhe.name}</p>
                          <p>{detalhe.artist}</p>
                          <iframe width="560" height="315" 
                          src="https://www.youtube.com/embed/CHekNnySAfM" 
                          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                   </div>

        })


        return(

            <div>

                {detalhes}
                <button onClick={this.props.trocandoPagina}>Voltar</button>

            </div>
        )
    }
}