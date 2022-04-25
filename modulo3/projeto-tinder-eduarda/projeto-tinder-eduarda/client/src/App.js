import React, { useState } from 'react';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import OnBoarding from './components/OnBoarding';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const authToken = cookies.AuthToken


  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        {authToken && <Route path="/dashboard" element={<Dashboard />} />}
        {authToken && <Route path="/onboarding" element={<OnBoarding />} />}

      </Routes>

    </BrowserRouter>
  );
}

export default App;

