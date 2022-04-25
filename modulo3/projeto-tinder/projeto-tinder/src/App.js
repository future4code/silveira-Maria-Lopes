import React from 'react';
import Header from './components/Header';
// import { BrowserRouter as Router, Switch, Route }
//   from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link }
  from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div className="App">

  
        <Router>
        
          <Header />

          <Route path="/home" element={[]}>
            <h1>I am the homepage</h1>
          </Route>

          <Route path="/chat" element={[]}>
            <h1>I am the chatpage</h1>
          </Route>

        

        </Router>
     
    </div >
  );
}

export default App;


{/* Tinder Cards */ }
{/* Buttons below tinder cards  */ }

{/* Chats Screen */ }
{/* Individual chat screen */ }