import { BaseDatabase } from "./BaseDataBase";

export class UserDataBase extends BaseDatabase {
    private static TABLE_NAME = "teppa_users"

    public async createUser(id: string, email: string, password: string): Promise<void> {
        try {
            await BaseDatabase.connection()
                .insert({
                    id,
                    email,
                    password
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

    public async getUserById(id: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(UserDataBase.TABLE_NAME)
            .where({ id })
        return result[0]
    }

} 