import { LikeDataBase } from "../data/LikeDataBase";



export class LikeBusiness {

    async verifyLike(user_id: string, post_id: string) {
        return await new LikeDataBase().verifyLike(user_id, post_id)
    }

    public async likePost(user_id: string, post_id: string) {
        return await new LikeDataBase().likePost(user_id, post_id)
    }

    public async unlikePost(user_id: string, post_id: string) {
        return await new LikeDataBase().unlikePost(user_id, post_id)
    }
}