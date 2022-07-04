import { BaseDatabase } from "./BaseDataBase";


export class UserDataBase extends BaseDatabase {
    private static TABLE_NAME = "User_Arq"

    public async createUser(id: string, email: string, name: string, password: string, role: string): Promise<void> {
        try {
            await BaseDatabase.connection()
                .insert({
                    id,
                    email,
                    name,
                    password,
                    role
                })
                .into(UserDataBase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async login(email: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(UserDataBase.TABLE_NAME)
            .where({ email })
        return result[0]
    }

    public async getUsers(): Promise<any> {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(UserDataBase.TABLE_NAME)
        return result
    }

    public async deleteUser(id: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .delete()
            .from(UserDataBase.TABLE_NAME)
            .where("id", id)
        return result
    }
}
