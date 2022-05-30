import axios from "axios";
import { BASE_URL } from "../Pages/constants/constants";


export const login = (body, clear, goToFeedPage) => {
 

    const url = "https://labeddit.herokuapp.com/"

    axios
    .post(`${BASE_URL}users/login`, body)
    .then((res) => {
    localStorage.setItem("token", res.data.token)
    clear();
    goToFeedPage();
    })
    .catch((error) => {
    alert(error.res.data)
    })
}




export const signinpage = (form, clear, goToFeedPage) => {

    const url = "https://labeddit.herokuapp.com/"
    const body = form

    axios
    .post(`${BASE_URL}users/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear();
        goToFeedPage();
        alert("Cadastro realizado com sucesso!")
    })
    .catch((error) => {
        alert(error.res.data)
    })
}