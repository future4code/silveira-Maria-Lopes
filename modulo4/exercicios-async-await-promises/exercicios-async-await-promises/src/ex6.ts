import axios from 'axios'
import { baseURL } from './baseURL'

type user = {
    id: string;
    message: string
}

const sendNotifications = async (users: user[], message: string): Promise<void> => {
    try {
        const requests = users.map((user) => {
            axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message
            });
        })
        await Promise.all(requests)
        console.log("All notifications sent")
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
};

const main = async () => {
    try {
        const notify = sendNotifications([], "Hello! You got a new message.")
            .then(console.log)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}
main()