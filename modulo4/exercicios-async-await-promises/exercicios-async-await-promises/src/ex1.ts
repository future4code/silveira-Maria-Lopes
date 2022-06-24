import axios from 'axios'
import { baseURL } from './baseURL'


async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
};

// getSubscribers()
// .then(console.log)

// a) Usamos o endpoint get para pegar as informações.
// b) Com a Promise<any[]> indicamos que retornará um array de "qualquer coisa".


const main = async () => {
    try {
        const subscribers = getSubscribers()
        .then(console.log)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}
main()