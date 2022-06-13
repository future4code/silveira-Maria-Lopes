import axios from 'axios'
import { baseURL } from './baseURL'

const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
};


// a) Funções assíncronas são aquelas que acessam ou buscam algum tipo de recurso em um dispositivo externo, como por exemplo um banco de dados, nesse tipo de função 
//    precisamos que nosso código espere que a resposta esteja disponível antes de executar a ação seguinte. A diferença de sintaxe entre
//    uma função nomeada assíncrona e uma arrow function assíncrona, é que na função nomeada assíncrona o async vem no início, e na função
//    arrow function assíncrona, vem logo antes da Promise.


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