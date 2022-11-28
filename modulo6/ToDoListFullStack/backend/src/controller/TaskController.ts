import { UserDataBase } from './../data/UserDataBase';
import { TaskBusiness } from './../business/TaskBusiness';
import { TaskDataBase } from './../data/TaskDataBase';
import { Request, Response } from 'express'
import { InputTask } from '../types/types';
import Authenticator from '../services/authenticator';

export class TaskController {
    async createTask(req: Request, res: Response) {
        try {
            const { title, status } = req.body

            const token = new Authenticator().getData(req.headers.authorization as string);
            const data = await new UserDataBase().getUserById(token.id)
            // para registrar a task, eu preciso passar o id do usuário que está logado.

            if (!data) {
                throw new Error("Make sure you are logged in before post something!")
            }

            const newTask: InputTask = {
                id: '',
                title,
                status
            }

            const newTaskBusiness = new TaskBusiness()
            const newTaskDataBase = await newTaskBusiness.createTask(newTask)

            res.status(201).send({ message: "Task created successfully!" })

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async getTasks(req: Request, res: Response) {
        try {

            const task = await new TaskDataBase().getTasks()

            res.status(201).send({
                task
            })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async editTaskById(req: Request, res: Response) {
        try {
            const id = req.params.id
            const { title, status } = req.body

            const token = new Authenticator().getData(req.headers.authorization as string);
            const data = await new UserDataBase().getUserById(token.id)
            // para registrar o pedido, eu preciso passar o id do usuário que está logado.

            if (!data) {
                throw new Error("Make sure you are logged!")
            }

            const editTask = await new TaskDataBase().editTaskById(id, title, status)
            const message = `Task edited successfully!`
            res.status(201).send({ message, editTask })

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async deleteTaskById(req: Request, res: Response) {
        try {
            const id = req.params.id

            const token = new Authenticator().getData(req.headers.authorization as string);
            const data = await new UserDataBase().getUserById(token.id)
            // para registrar o pedido, eu preciso passar o id do usuário que está logado.

            if (!data) {
                throw new Error("Make sure you are logged in!")
            }

            const deleteTask = await new TaskDataBase().deleteTaskById(id)
            const message = `Task deleted successfully!`
            res.status(200).send({ message, deleteTask })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async getTaskById(req: Request, res: Response) {
        try {
            const id = req.params.id

            const task = await new TaskBusiness().getTaskById(id)
            res.status(200).send({ task })

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}