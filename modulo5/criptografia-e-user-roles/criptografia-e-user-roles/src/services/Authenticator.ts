import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types"
import dotenv from 'dotenv'

dotenv.config()

export default class Authenticator {
    generateToken = (input: authenticationData): string => {
        const token = jwt.sign(
          {
            id: input.id,
            role: input.role,
          },
          process.env.JWT_KEY as string,
          {
            expiresIn:"20min"
          }
        );
        return token;
      }

     getData = (token: string): authenticationData => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        
        const result = {
          id: payload.id,
          role: payload.role,
        };
        return result;
      }
}