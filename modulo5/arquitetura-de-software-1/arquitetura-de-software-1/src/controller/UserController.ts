import UserBusiness, * as userBusiness from "../business/UserBusiness";
import { Request, Response } from 'express'
import { InputUser } from "../types/types";


class UserController {
    async signup(req: Request, res: Response) {
        try {
            const { email, name, password, role } = req.body

            const newUser: InputUser = {
                email,
                name,
                password,
                role
            }

            const newUserBusiness = new UserBusiness()
            const token = await newUserBusiness.createUser(newUser)

            res.status(201).send({ message: "User created successfully!", token })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }


    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const login = {
                email,
                password
            }

            const token = await new UserBusiness().login(login)

            res.status(201).send({ message: "Login successfully!", token })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }


    async getUser(req: Request, res: Response) {
        try {
            const token = req.headers.authorization!;
            const users = await new UserBusiness().getAllUsers(token);

            res.send(users).status(200);

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }


    async deleteUser(req: Request, res: Response) {
        try {
            const input = {
                id: req.params.id,
                token: req.headers.authorization!
            }

            await new UserBusiness().deleteUser(input);

            res.status(200).send({ message: "User successfully deleted!" });
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}

export default UserController;