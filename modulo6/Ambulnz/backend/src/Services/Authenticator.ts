import * as jwt from "jsonwebtoken";
import { authenticationData } from "../../Types/Types";
import dotenv from 'dotenv'

dotenv.config()
const expiresIn = "5h"

export default class Authenticator {
    generateToken = (payload: authenticationData) => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn
            }
        )
    }

    getData = (token: string) => {
        const tokenData = jwt.verify(
            token, process.env.JWT_KEY as string,
        )

        return tokenData as authenticationData
    }
}