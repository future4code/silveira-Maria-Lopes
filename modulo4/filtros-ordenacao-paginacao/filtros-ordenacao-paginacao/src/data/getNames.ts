import { connection } from "./connection"

export const getNames = async (name: string) => {
    const resultado = await connection.raw(`
      SELECT * FROM aula49_exercicio
      where name LIKE "%${name}%" 
    `)
    return resultado[0]
 }