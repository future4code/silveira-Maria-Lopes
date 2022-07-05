import { Request, Response } from 'express'
import { PostBusiness } from '../../business/PostBusiness';
import { PostDataBase } from '../data/PostDataBase';
import { UserDataBase } from '../data/UserDataBase';
import Authenticator from '../authenticator';



export class PostController {

    async createPost(req: Request, res: Response) {
        try {
            const { photo, description, type } = req.body

            const token = new Authenticator().getData(req.headers.authorization as string);
            const data = await new UserDataBase().getUserById(token.id)
            // para registrar o post, eu preciso passar o id do criador do post. 

            if (!data) {
                throw new Error("Make sure you are logged in before post something!")
            }

            const newPost = {
                id: '',
                photo,
                description,
                type,
                created_at: new Date(),
                author_id: token.id
            }

            const newPostBusiness = new PostBusiness()
            const post = await newPostBusiness.createPost(newPost)

            res.status(201).send({ message: "Post created successfully!", post })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async getPost(req: Request, res: Response) {
        try {
            const postId = req.params.id
            const token = new Authenticator().getData(req.headers.authorization as string);
            // passando por ID o id do post para acessá-lo.
            // criando uma nova instância de Authenticator para acessar o método getData que está dentro dele.

            const user = await new UserDataBase().getUserById(token.id)

            if (!user) {
                throw new Error("Make sure you are logged in before search posts!")
            }

            if (!postId) {
                throw new Error("Please, enter the id of the post you want to search!")
            }

            const post = await new PostDataBase().getPostById(postId)
            res.status(201).send({
                post
            })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async getFeed(req: Request, res: Response) {
        try {
            const token = new Authenticator().getData(req.headers.authorization as string);
      
            const user = await new UserDataBase().getUserById(token.id)

            if (!user) {
                throw new Error("Make sure you are logged in before search feed!")
            }
        
            const feed = await new UserDataBase().getFeed(user.id)
            res.status(200).send({
                posts: feed
            })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async getFeedByType(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const type = req.query.type as string
          
            const data = new Authenticator().getData(token)

            const feed = await new PostBusiness().getFeedByType(type, data.id)

            res.status(200).send({
                feed
            })

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async pagination(req: Request, res: Response) {
        try {
            let page = Number(req.query.page)
            let size = 5
            let offset = size * (page - 1)

            if (page < 1 || isNaN(page)) {
                page = 1
            }
            // verificação para garantir que a minha página padrão seja 1, caso o usuário
            // digitar um valor inválido, ou menor que 1.

            // const result = await new PostDataBase().
            //     .limit(size)
            //     .offset(offset)

            // res.status(200).send({ result })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }


}
