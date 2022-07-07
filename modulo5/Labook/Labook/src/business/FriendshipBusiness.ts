import { FriendshipConnectionDataBase } from "../data/FriendshipConnectionDataBase";
import { friends } from "../types/types";



export class FriendshipBusiness {
    
    async verifyFriendship(follower_id: string, followed_id: string) {
        return await new FriendshipConnectionDataBase().verifyFriendship(follower_id, followed_id)
    }

    async createFriendship(friends: friends) {
        try {
            if (!friends.followed_id || !friends.follower_id) {
                throw new Error("Please, fill all the fiels!")
            }

            const friendship = new FriendshipConnectionDataBase().friendship(friends.followed_id, friends.follower_id)
            return friendship

        } catch (error: any) {
            throw new Error(error.message || "Error to add someone. Please check your system administrator.");
        }
    }

    async unfriend(friends: friends) {
        try {
            if (!friends.followed_id || !friends.follower_id) {
                throw new Error("Please, fill all the fiels!")
            }

            const unfriend = new FriendshipConnectionDataBase().unfriendUser(friends.followed_id, friends.follower_id)
            return unfriend

        } catch (error: any) {
            throw new Error(error.message || "Error to unfriend. Please check your system administrator.");
        }
    }
}