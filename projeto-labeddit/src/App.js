import react from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Router from './Routes/Router'
import { BrowserRouter, Routes, Route, } from "react-router-dom";



const DivMain = styled.div`
display: flex;
justify-content: center;
align-self: center;
align-items: center;
height: 100vh;
width: 100%;
background-color: silver;
`


function App() {
  return (
    <DivMain>
 
      <Router />
      
    </DivMain>
  );
}

export default App;
