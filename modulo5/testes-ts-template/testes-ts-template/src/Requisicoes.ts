import { Request, Response } from "express";
import { connection } from ".";

type PostType = {
    id: string,
    title: string,
    content: string
}

export class Post {
    // data base
    public async createPost(id: string, title: string, content: string) {
        try {
            await connection()
                .insert({
                    id,
                    title,
                    content
                })
                .into('testepost')
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    // data base - getPostById
    public async getPostById(id: string): Promise<any> {
        const result = await connection()
            .select("*")
            .from('testepost')
            .where({ id })
        return result[0]
    }

    // data base - deletePostById
    public async deletePostById(id: string): Promise<any> {
        const result = await connection()
            .delete()
            .from('testepost')
            .where({ id })
        return result
    }

    // data base - destroyConnection
    public async desconnectDB() {
        if (connection !== null) {
            await connection.destroy()
        }
    }

    // business
    async createThePost(post: PostType) {
        try {

            const newPost = this.createPost(post.id, post.title, post.content)
            return newPost

        } catch (error: any) {
            throw new Error(error.message || "Error creating post. Please check your system administrator.");
        }
    }

    // controller
    async finallyPost(req: Request, res: Response) {
        try {

            const post: PostType = {
                id: req.body.id,
                title: req.body.title,
                content: req.body.content
            }

            const postando = this.createPost(post.id, post.title, post.content)

            res.status(201).send({ message: "Post created successfully!", postando })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }


}

