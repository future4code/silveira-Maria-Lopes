import knex from 'knex'
import { connection } from '../connection'

const userTableName = "UsersTable"

export const getUserById = async (id: string): Promise<any> => {
    const result = await connection
        .select("*")
        .from(userTableName)
        .where({ id });

    return result[0];
}