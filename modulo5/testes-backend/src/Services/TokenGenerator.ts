import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export class TokenGenerator {

    public generate = (input: AuthenticationDataInterface): string => {
        const newToken = jwt.sign(
            {
                id: input.id,
                role: input.role,
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
            }
        );
        return newToken;
    };

    public verify(token: string) {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.id,
            role: payload.role
        };
        return result;
    }
}

export interface AuthenticationDataInterface {
    id: string;
    role: string;
}

export default new TokenGenerator()