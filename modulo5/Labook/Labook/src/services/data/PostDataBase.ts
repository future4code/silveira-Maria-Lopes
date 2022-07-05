import { BaseDatabase } from "./BaseDataBase";



export class PostDataBase extends BaseDatabase {
    private static TABLE_NAME = "labook_posts"

    public async createPost(id: string, photo: string, description: string, type: string, created_at: Date, author_id: string): Promise<void> {
        try {
            await BaseDatabase.connection()
                .insert({
                    id,
                    photo,
                    description,
                    type,
                    created_at,
                    author_id
                })
                .into(PostDataBase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getPostById(id: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(PostDataBase.TABLE_NAME)
            .where({ id })
        return result[0]
    }



}