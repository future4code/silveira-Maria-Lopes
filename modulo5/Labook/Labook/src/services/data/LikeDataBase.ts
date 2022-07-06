import { BaseDatabase } from "./BaseDataBase";

export class LikeDataBase extends BaseDatabase {
    private static TABLE_NAME = "labook_like"

    async verifyLike(user_id: string, post_id: string) {
        const result = await LikeDataBase.connection.raw(`
        SELECT COUNT(*) as count 
        FROM labook_like
        WHERE user_id = "${user_id}" AND post_id = "${post_id}"
        `)
        return result[0]
    }

    public async likePost(user_id: string, post_id: string): Promise<void> {
        await BaseDatabase.connection()
            .insert({
                user_id: user_id,
                post_id: post_id
            })
            .into(LikeDataBase.TABLE_NAME)
    }

    public async unlikePost(user_id: string, post_id: string): Promise<void> {
        await BaseDatabase.connection()
            .delete()
            .from(LikeDataBase.TABLE_NAME)
            .where({
                user_id: user_id,
                post_id: post_id
            })
    }
}