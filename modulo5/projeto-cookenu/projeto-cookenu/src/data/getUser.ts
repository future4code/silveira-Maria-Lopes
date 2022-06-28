import connection from "../data/connection"

export const getUser = async (email: string): Promise<any> => {
    const result = await connection
        .select("*")
        .from("createUserCookenu")
        .where({ email });

    return result[0];
}