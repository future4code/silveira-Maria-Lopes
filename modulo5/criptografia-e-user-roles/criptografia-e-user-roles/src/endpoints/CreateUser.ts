import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { generateId } from "../services/IdGenerator";
import { createUserTable } from "../data/CreateUser";
import { HashManager } from "../services/HashManager";
import { user } from "../types";
import connection from "../data/connection";
import { authenticationData } from "../types";

export default async function createUser(req: Request, res: Response): Promise<void> {
   try {

      const { email, password, role } = req.body

      if (!email || !password) {
         throw new Error("As credenciais não foram fornecidas!");
      }

      const userData = {
         email,
         password,
         role
      };

      const id = generateId();

      // criou uma instancia da classe HashManager
      const newHash: HashManager = new HashManager()

      // chamamos o método createHash para criptografar o nosso password
      const senhaCriptografada = newHash.createHash(userData.password)

      // ao inves de enviar o password como veio, 
      //estamos enviando a senhacriptografada para o banco de dados
      const newUser: user = {
         id,
         email: userData.email,
         password: senhaCriptografada
      }
      await connection("UsersTable").insert(newUser)

      const payload: authenticationData = {
         id,
         role: userData.role
     };

     const newAuthenticator = new Authenticator();

     const token = newAuthenticator.generateToken(payload);


      res.status(201).send({ message: "User created successfully!", token })

   } catch (error: any) {
      console.log(error)
      res.status(400).send({
         message: error.message,
      });
   }
}