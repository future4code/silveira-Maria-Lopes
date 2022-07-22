import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';
import SignupPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage'


function Router() {
    return (

        <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="menupage" element={<MenuPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="login" element={<LoginPage />} />
        </Routes>

    )
}

export default Router;