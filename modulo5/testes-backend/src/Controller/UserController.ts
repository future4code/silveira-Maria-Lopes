import { UserDatabase } from './../Data/UserDataBase';
import { UserBusiness } from './../Business/UserBusiness';
import { Request, Response } from "express";
import { User } from '../Model/User';


export class UserController {


    public async getUserProfile(req: Request, res: Response) {
        try {
            const id = req.params.id as string

            const user = new UserDatabase().getUserById(id)

            return {
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                role: user.getRole(),
            };
        } catch (error: any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message });
        }
    }
}