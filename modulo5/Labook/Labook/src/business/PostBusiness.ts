import { generateId } from "../services/idGenerator";
import { InputPost } from "../types/types";
import { PostDataBase } from "../data/PostDataBase";
import { UserDataBase } from "../data/UserDataBase";


export class PostBusiness {

    async createPost(post: InputPost) {
        try {
            if (!post.photo || !post.description || !post.type || !post.created_at) {
                throw new Error("Please, fill all the fiels!")
            }

            const id = generateId()

            const newPostBase = new PostDataBase().createPost(id, post.photo, post.description, post.type, post.created_at, post.author_id)
            return newPostBase

        } catch (error: any) {
            throw new Error(error.message || "Error creating post. Please check your system administrator.");
        }
    }

    async getFeed(id: string) {
        return await new UserDataBase().getFeed(id)
    }

    async getFeedByType(type: string, id: string) {

        const feed = await new UserDataBase().getFeed(id)

        const filterFeed = feed.filter((post) => {
            return post.type === type
        })
        return filterFeed
    }

    async pagination(page: number) {
        let size = 2
        let offset = size * (page - 1)

        if (page < 1 || isNaN(page)) {
            page = 1
        }

        const pages = await new PostDataBase().Pagination(offset)
        return pages
    }
}