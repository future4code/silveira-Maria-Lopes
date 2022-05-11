import react from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Router from './Routes/Router'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
// import Header from "./Components/Header";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
` 

const DivMain = styled.div`
display: flex;
justify-content: center;
align-self: center;
align-items: center;
height: 100%;
width: 100%;
background-color: #e9967a;
`

function App() {
  return (
    <div>
        {/* <Header /> */}
        <Router />
    </div>
  );
}

export default App;
