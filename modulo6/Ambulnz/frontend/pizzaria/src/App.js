import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/header';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/router';


function App() {
  return (

    <>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </>

  );
}

export default App;
