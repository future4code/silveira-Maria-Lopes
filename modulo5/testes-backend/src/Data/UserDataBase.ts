import { BaseDatabase } from "./BaseDataBase";
import { User } from "../Model/User";

export class UserDatabase extends BaseDatabase {
    protected tableName: string = "User_Arq_Test";

    public async getUserById(id: string): Promise<User | undefined> {
        try {
            const result = await BaseDatabase.connection.raw(`
            SELECT * from ${this.tableName} WHERE id = '${id}'
         `);
            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}