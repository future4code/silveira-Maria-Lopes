import { connection } from "./connection"

export const getUserById = async (id: string): Promise<any> => {

    const user = await connection("createUserCookenu")
        .select(`*`)
        .where({ id });

    return user
}