import connection from "../connection";

export const getUserByEmail = async (email: string): Promise<any> => {
    const result = await connection
        .select("*")
        .from("UsersTable")
        .where({ email });

    return result[0];
}