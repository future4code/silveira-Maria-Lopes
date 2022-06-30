import { compareSync, genSaltSync, hashSync } from "bcryptjs";

export class HashManager{
    createHash = (plainText: string): string => {
        // 12 => número 'mágico'
        // parâmetro que define o tempo de execução do algoritmo
        const cost = 12
        // string aleatória para gerar hashs diferentes mesmo com senhas iguais
        const salt: string = genSaltSync(cost)

        // gerando a hash aleatoria
        const cypherText: string = hashSync(plainText, salt)
        return cypherText
    }

    compareHash = (plainText: string, cypherText: string): boolean => {
        return compareSync(plainText, cypherText)
    }
}