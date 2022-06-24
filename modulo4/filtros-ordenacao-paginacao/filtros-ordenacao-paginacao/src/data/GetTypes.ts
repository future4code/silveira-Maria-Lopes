import { connection } from "./connection"

export const getTypes = async (type: string) => {
    const resultado = await connection.raw(`
      SELECT * FROM aula49_exercicio
      where type LIKE "${type}"
    `)
    return resultado[0]
}