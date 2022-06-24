import express, {Express} from 'express'
import cors from 'cors'
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();
export const app: Express = express();

app.use(express.json());
app.use(cors());



import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});