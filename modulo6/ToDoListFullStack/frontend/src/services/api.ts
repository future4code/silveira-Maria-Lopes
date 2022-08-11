import axios from 'axios'
// nessa pasta será feita a comunicação com a api e as requisições

const api = axios.create({
    baseURL: "https://to-do-list-maria-eduarda-lopes.herokuapp.com"
})


export default api;