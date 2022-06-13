import axios from 'axios'
import { baseURL } from './baseURL'


type user = {
	id: string;
	name: string;
	email: string;
}

// a) Não teremos erro de tipagem porque o retorno da nossa função será realmente com id, name e email.
// b) É importante fazer o mapeamento quando o retorno é uma Promise<any>, pois como o próprio nome diz, ela retornará
//    qualquer coisa. Por isso, fazemos o mapeamento para que retorne só o que será útil para nós, como o id, name, etc.
// c) 
const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((subscriber: any) => {
        return {
            id: subscriber.id,
            name: subscriber.name,
            email: subscriber.email
        }
    })
};

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