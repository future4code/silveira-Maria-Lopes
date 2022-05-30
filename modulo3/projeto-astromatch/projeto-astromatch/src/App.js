import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Home from "./components/Home";
import MatchPage from "./components/MatchPage";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
`

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Maria-Eduarda-Lopes-Silveira/clear"


function App() {
  const [page, setPage] = useState("Home")

  const changePage = () => {

    switch (page) {
      case "Home":
        return <Home nextPage={nextPage} resetar={clearApp}></Home>
      case "MatchPage":
        return <MatchPage backPage={backPage}></MatchPage>
      default:
        return <Home></Home>
    }
  }

  const nextPage = () => {
    setPage("MatchPage")
  }

  const backPage = () => {
    setPage("Home")
  }


  const clearApp = () => {
    const headers = {
      headers:
      {
        "Content-Type": "application/json"
      }
    }

    axios
      .put(url, headers)
      .then((res) => {
        alert("Lista de matches resetados com sucesso! Tá feliz? Vamos começar de novo!")
      })
      .catch((err) => {
        alert("Puxa, algo deu errado aqui...")
      })

  }





  return (
    <div>
      <GlobalStyle />
      {changePage()}
    </div>
  )
}

export default App;