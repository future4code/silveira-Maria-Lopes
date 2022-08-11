import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import RoutesComponent from './routes';
import Header from './components/Header'
import { Cadastro } from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Cadastro />
      <RoutesComponent />
    </BrowserRouter>
  );
}

export default App;
