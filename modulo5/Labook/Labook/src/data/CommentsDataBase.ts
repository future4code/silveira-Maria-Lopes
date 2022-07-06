import { BaseDatabase } from "./BaseDataBase";

export class CommentsDataBase extends BaseDatabase {
    private static TABLE_NAME = "labook_commentss"

    async commentPost(id: string, comment: string, user_id: string, post_id: string) {
        await BaseDatabase.connection()
            .insert({
                id,
                comment: comment,
                user_id: user_id,
                post_id: post_id
            })
            .into(CommentsDataBase.TABLE_NAME)
    }
}