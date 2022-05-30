import React from "react";
import styled from "styled-components";
import axios from "axios";

const Botao1 = styled.button`
display: flex;
justify-content:center;
justify-items: center;
margin-top: 5px;
height: 25px;
width: 150px;
margin-left: 12px;
`


const DivPaginaInicial = styled.div`
display: grid;
grid-template-rows: 25px 100px 40px;
text-align: center;
justify-content: center;
margin-top: 50px;

`
const VisualizarPlaylists = styled.button`
margin-top: -10px;


`



export default class CriarPlaylist extends React.Component {
    state = {
        criandoPlaylist: "",
    }



    onChangeCriandoPlaylist = (event) => {
        this.setState({
            criandoPlaylist: event.target.value
        })
    }


    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.criandoPlaylist
        }

        axios.post(url, body, {
            headers: {
                Authorization: "Maria-Eduarda-Lopes-Silveira"
            }
        })
            .then((res) => {
                alert(`Playlist criada com sucesso!`)
                this.setState({
                    criandoPlaylist: "",
                    nome: ""
                })

            })
            .catch((err) => {
                alert(`ERRO ao criar playlist`)

            })
    }

    botaoEnter = (event) => {
        if (event.keyCode === 13) {
            this.criarPlaylist()
        }
    }


    render() {
        return (
            <div>

                <DivPaginaInicial onKeyDown={(event) => this.botaoEnter(event)}>

                    <input
                        placeholder=""
                        value={this.state.criandoPlaylist}
                        onChange={this.onChangeCriandoPlaylist}
                    />
                    <Botao1 onClick={this.criarPlaylist}>Criar Playlist</Botao1>

                    <VisualizarPlaylists onClick={this.props.lista}>Visualizar playlists criadas</VisualizarPlaylists>

                </DivPaginaInicial>
            </div>
        )
    }
}