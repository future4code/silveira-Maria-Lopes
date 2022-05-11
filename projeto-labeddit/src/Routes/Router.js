import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import React from "react";
import LoginPage from '../Pages/LoginPage';
import SignInPage from '../Pages/SignInPage'
import FeedPage from '../Pages/FeedPagePasta/FeedPage';
import PostDetails from '../Pages/PostDetailsPage/PostDetails';
import ErrorPage from '../Pages/ErrorPage';

function Router() {
    return (
        <>
            <BrowserRouter>

                <Routes>

                    <Route path="/error" element={<ErrorPage />} />
                    <Route path="/loginpage" element={<LoginPage />} />
                    <Route path="/feedpage" element={<FeedPage />} />
                    <Route path="/postdetails/:id" element={<PostDetails/>} />
                    <Route path="/signinpage" element={<SignInPage />} />
                    
                </Routes>

            </BrowserRouter>


        </>
    );
}

export default Router;