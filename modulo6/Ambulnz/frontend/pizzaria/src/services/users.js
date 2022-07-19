import axios from 'axios'
import BASE_URL from './url'


export const signup = (event, body) => {
    event.preventDefault()

    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            console.log(res.data.token)
            localStorage.setItem('token', res.data.token)
            alert('Usuário cadastrado!')
        })
        .catch((error) => {
            alert('Erro ao criar o usuário!')
        })
}


