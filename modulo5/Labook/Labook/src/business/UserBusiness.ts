import { UserDataBase } from "../services/data/UserDataBase";
import Authenticator from "../services/authenticator";
import { HashManager } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { InputUser } from "../types/types";
import { UserLogin } from "../types/types";

export class UserBusiness {

    async createUser(user: InputUser) {
        try {
            if (!user.email || !user.name || !user.password) {
                throw new Error("Please, fill all the fields!")
            }

            if (user.email.indexOf("@") === -1) {
                throw new Error("Invalid Email!")
            }

            if (user.password.length < 6) {
                throw new Error("Password must have at least 6 characters!")
            }

            const id = generateId();
            const newHash = new HashManager()
            const hashPassword = newHash.createHash(user.password)

            const newUserDataBase = new UserDataBase()
            await newUserDataBase.createUser(id, user.email, user.name, hashPassword);

            const token = new Authenticator().generateToken({
                id: id
            })

            return token
        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }

    async login(user: UserLogin) {
        try {

            const userData = {
                email: user.email,
                password: user.password
            };

            const loginUser = await new UserDataBase().login(userData.email);

            const hashManager: HashManager = new HashManager()


            const compareResult = hashManager.compareHash(
                userData.password,
                loginUser.password
            );
            // comparando a senha do meu banco de dados com a senha que foi enviada no body da requisição pelo usuário.

            if (!compareResult) {
                throw new Error("Invalid credentials!");
            }
            // validação da comparação das senhas: a do banco de dados com a que foi enviada no body da requisição pelo usuário.

            const newAuthenticator = new Authenticator()
            const token = newAuthenticator.generateToken({
                id: loginUser.id
            })

            return token

        } catch (error: any) {
            throw new Error(error.message || "Error to login. Please check your system administrator.");
        }
    }



}