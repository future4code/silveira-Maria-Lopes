import { TaskDataBase } from "../data/TaskDataBase";
import Authenticator from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { HashManager } from "../services/hashManager";
import { InputTask } from "../types/types";

export class TaskBusiness {

    async createTask(task: InputTask) {
        try {

            if (!task.title || !task.status) {
                throw new Error("Please, fill all the fields!")
            }

            const id = generateId()
            // gerando o id da task

            const newTask = new TaskDataBase()
            await newTask.createTask(id, task.title, task.status)

            return newTask
        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }

    async getTaskByTitle() {
        try {
            const task = await new TaskDataBase().getTasks()

            if (!task) {
                throw new Error("Please, enter the task you want to search!")
            }

        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }


    async updateTaskById(id: string, title: string, description: string) {
        try {
            // verificando se o id da task que deseja editar foi passado por path params
            if (!id) {
                throw new Error('Please, you need to fill the parameter ID!')
            }

            // verificando se os campos que serão editados foram preenchidos
            if (!title || !description) {
                throw new Error('Please, fill in all the fields!')
            }


            // encontrando a task que será editada
            const task = await new TaskDataBase().findTask(id)

            if (!task) {
                throw new Error('Task not found!')
            }

            // caso existente, atualizando a task
            const updateTask = await new TaskDataBase().editTaskById(id, title, description)
            return updateTask;


        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }

    async deleteTask(id: string) {
        try {
            if (!id) {
                throw new Error('Please, you need to fill the parameter ID!')
            }

            // encontrando a task que será deletada
            const task = await new TaskDataBase().findTask(id)

            if (!task) {
                throw new Error('Task not found!')
            }

            // deletando
            await new TaskDataBase().deleteTaskById(id)
            return task;


        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }

    async getTaskById(id: string) {
        try {
            if (!id) {
                throw new Error('Please, you need to fill the parameter ID!')
            }

            // encontrando a task
            const task = await new TaskDataBase().findTask(id)

            if (!task) {
                throw new Error('Task not found!')
            } else {
                return task;
            }

        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }

}