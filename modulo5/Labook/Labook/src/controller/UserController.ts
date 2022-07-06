import { UserBusiness } from '../business/UserBusiness';
import { Request, Response } from 'express'
import { InputUser } from "../types/types";



export class UserController {
    async signup(req: Request, res: Response) {
        try {
            const { email, name, password } = req.body

            const newUser: InputUser = {
                id: '',
                email,
                name,
                password
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


}