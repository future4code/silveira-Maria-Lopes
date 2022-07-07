import { Request, Response } from 'express'
import { PostBusiness } from '../business/PostBusiness';
import { PostDataBase } from '../data/PostDataBase';
import { UserDataBase } from '../data/UserDataBase';
import Authenticator from '../services/authenticator';



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
            // pegando o usuário por id.
            if (!user) {
                throw new Error("Make sure you are logged in before search posts!")
            }
            // é necessário estar logado para buscar posts.
            if (!postId) {
                throw new Error("Please, enter the id of the post you want to search!")
            }
            // é necessário passar o ID de um post por params para fazer a busca.
            const post = await new PostDataBase().getPostById(postId)
            // criando uma nova instância de PostDataBase e acessando o método getPostById.
            res.status(201).send({
                post
            })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async getFeed(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            // token para logar.
            if (!token) {
                throw new Error("Make sure you are logged in before search feed!")
            }
            // é necessário estar logado para acessar o feed de posts.
            const data = new Authenticator().getData(token);
            // conferindo o token.
            const user = await new UserDataBase().getUserById(data.id)
            // criando uma instância de UserDataBase e acessando o método getUserById.
            if (!user) {
                throw new Error("Make sure you are logged in before search feed!")
            }
            // é necessário estar logado para acessar o feed de posts.
            const feed = await new UserDataBase().getFeed(user.id)
            // criando uma instância de UserDataBase e acessando o método getFeed(que será o feed de posts de posts criados pelos usuários que ele segue).
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
            // token para logar.
            const type = req.query.type as string
            // passando o tipo de post que quero filtrar/receber no meu feed.
            if (!token) {
                throw new Error("Make sure you are logged in before search feed!")
            }
            // é necessário passar o token para acessar o feed.
            const data = new Authenticator().getData(token)
            // conferindo o token.
            const feed = await new PostBusiness().getFeedByType(type, data.id)
            // criando uma nova instância de PostBusiness e acessando o método getFeedByType.
            res.status(200).send({
                feed
            })

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async pagination(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            // token para logar.
            if (!token) {
                throw new Error("Make sure you are logged in before search feed!")
            }

            let page = Number(req.query.page)
            // passando por query o número da página que quero exibir.
            const data = new Authenticator().getData(token);
            const user = await new UserDataBase().getUserById(data.id)

            if (!user) {
                throw new Error("Make sure you are logged in before search feed!")
            }

            // não é possivel buscar sem estar logado.
            const result = await new PostBusiness().pagination(page)
            // nova instância de postbusiness pra acessar o método pagination.
            res.status(200).send({ result })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}
