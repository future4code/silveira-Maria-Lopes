import axios from 'axios'
import { baseURL } from './baseURL'

type user = {
	id: string;
    message: string
}

const sendNotifications = async (users: user[], message: string): Promise<void> => {
    try {
          for (const user of users) {
          await axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: user.message
          });
        }
        console.log("All notifications sent");
      } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
      }
  };

const main = async () => {
    try {
        const notify = sendNotifications([], "Olá")
            .then(console.log)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}
main()