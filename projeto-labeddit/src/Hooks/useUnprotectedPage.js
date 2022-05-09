import React, { useEffect } from "react";
import FeedPage from "../Pages/FeedPage";
import { useNavigate } from "react-router-dom";



const useUnprotectedPage = () => {

    let navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            navigate("/feedpage")
        }

    }, [])
}

// useProtectedPage();

export default useUnprotectedPage;