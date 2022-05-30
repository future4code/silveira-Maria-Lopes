import React, { useEffect } from "react";
// import LoginPage from "../Pages/LoginPage"
import { useNavigate } from "react-router-dom";



const useProtectedPage = () => {

    let navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            navigate("/loginpage")
        }

    }, [])
}

// useProtectedPage();

export default useProtectedPage;