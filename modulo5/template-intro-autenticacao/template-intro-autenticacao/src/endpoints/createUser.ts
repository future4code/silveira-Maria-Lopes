import { Request, Response } from "express";
import connection from "../connection";
import { user } from "../types";
import Authenticator from "../services/Authenticator";
import { generateId } from "../services/IdGenerator";
import { authenticationData } from "../types";
import generateToken from "../services/Authenticator"
import { createUserTable } from "../data/createUser";

export default async function createUser(req: Request, res: Response): Promise<void> {
   try {

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         throw new Error("Invalid email");
      }

      if (!req.body.password || req.body.password.length < 6) {
         throw new Error("Invalid password");
      }

      const userData = {
         email: req.body.email,
         password: req.body.password,
      };

      const id = generateId();

      await createUserTable(id, userData.email, userData.password)

      const authenticator = new Authenticator()

      const token = authenticator.generateToken({
         id,
      });

      res.status(201).send({ message: "User created successfully!", token })

   } catch (error: any) {
      console.log(error)
      res.status(400).send({
         message: error.message,
      });
   }
}