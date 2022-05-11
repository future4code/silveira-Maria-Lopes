import React from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "./Cards";

const Header = styled.header`
width: 100vw;
background-color: green;
height: 15vh;
`
const ButtonHeader = styled.button`
padding: 10px;
margin: 25px;
cursor: pointer;
`
// const DivCards = styled.div`
// height: 50vh;
// width: 100vw;
// background-color: sienna;
// width: 230px;   
// box-shadow: 2px 2px 2px 2px darkgray; 
// display: flex;
// flex-direction: column;
// align-items: center;
// margin: 20px;
// `

const Catagolo = styled.div`
/* display: grid;
grid-template: 1fr 1fr / repeat(4, 1fr);
gap: 0.5em; */
justify-content: center;
align-items: center;
margin-right: 10rem;
margin-left: 10rem;
margin-top: 5rem;
background-color: brown;
display: grid;
grid-template-columns: 2fr 2fr 2fr 2fr;
grid-template-rows: 1fr 1fr;
height: 40vh;
width: 20vw;
`

function App() {




  return (
    <div>

      <Header>
        <ButtonHeader>Ver minha pokedex</ButtonHeader>
        Lista de Pokemons
      </Header>

      <Catagolo>
      PokeCard
        <Card />

      </Catagolo>

    </div>
  );
}

export default App;
