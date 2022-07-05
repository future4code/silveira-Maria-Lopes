import { BaseDatabase } from "./BaseDataBase";

export class LikeDataBase extends BaseDatabase {
    private static TABLE_NAME = "labook_like"

    async verifyLike(userId: string, postId: string) {
        const result = await LikeDataBase.connection.raw(`
        SELECT COUNT(*) as count 
        FROM labook_like
        WHERE user_id = "${userId}" AND post_id = "${postId}"
        `)
        return result[0]
    }

    public async likePost(userId: string, postId: string): Promise<void> {
        await BaseDatabase.connection()
            .insert({
                user_id: userId,
                post_id: postId
            })
            .into(LikeDataBase.TABLE_NAME)
    }

    public async unlikePost(userId: string, postId: string): Promise<void> {
        await BaseDatabase.connection()
            .delete()
            .from(LikeDataBase.TABLE_NAME)
            .where({
                user_id: userId,
                post_id: postId
            })
    }
}