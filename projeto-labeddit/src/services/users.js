import axios from "axios";
import { BASE_URL } from "../constants";


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