import { generateId } from "../services/idGenerator";
import { CommentsDataBase } from "../services/data/CommentsDataBase";

export class CommentBusiness {

    async commentPost(comment: string, user_id: string, post_id: string) {
        const id = generateId()
        return await new CommentsDataBase().commentPost(id, comment, user_id, post_id)
    }
}