import knex from "knex";
import dotenv from "dotenv";
import { Character } from "./types";

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});


// exercício 1
// letra b)

export function validateCharacter(input: Character): boolean {
  if (!input.name || input.life === undefined || input.strength === undefined || input.defense === undefined) {
    return false
  }
  // o personagem deve possuir nome, vida, força e defesa.
  if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
    return false
  }
  // a vida do personagem não pode ser menor ou igual à zero, nem sua força, nem sua defesa.
  return true;
  // caso possua todos os campos, retornará true.
}

// exercício 3
// essa função representa o ataque de um personagem a outro. Recebe dois parâmetros: attacker(atacante) e defender(defensor), que são do tipo Character.
export function performAttack(attacker: Character, defender: Character, validator: (input: Character) => boolean) {
  // há uma função dentro do parâmetro, uma função 'mockada'. Dessa forma, consigo chamar minha função para validar character aqui dentro dessa outra função.
  // inversão de dependências.
  if (!validator(attacker) || !validator(defender)) {
    throw new Error('Invalid character!')
  }
  // estou chamando a função criada anteriormente(que serve justamente para validar os personagens) para fazer a validação deles.

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense
  }
  // se a força do atacamente for maior do que a defesa do defensor, a vida do defensor irá diminuir: attacker.strength - defender.defense.

  // if (attacker.strength < defender.defense) {
  //   defender.life -= defender.life
  // }
  // se a defesa do defender for maior do que a força do attacker, nenhuma vida do defender será retirada.
}

// desafio 7
export function recoverCharacters(characters: Character[], validator: (input: Character) => boolean) {

  if (characters.length < 2) {
    throw new Error('Character array must have 2 or more characters!')
  }

  for (let character of characters) {
    const validate = validator(character)

    if (!validate) {
      throw new Error('Invalid Character!')
    }
    character.life = 1500;
  }
  // Historinha: no nosso jogo, as personagens recuperam a vida com um xamã. Ele só faz rituais que recuperam, no mínimo, dois personagens.
  // retornando o array de personagens com a vida máxima 1500.
  return characters
}

export function increaseCharacterStrength(character: Character, newStrength: number, validator: (input: any) => boolean) {
  const isValidCharacter: boolean = validator(character)
  // conferindo se o personagem é válido.

  if (!isValidCharacter) {
    throw new Error('Invalid Character!')
  }

  if (character.strength >= newStrength) {
    throw new Error('A value greater than the previous one must be entered!')
  }
  // conferindo se o novo valor para a força do personagem é maior do que o valor anterior.
  character.strength = newStrength;
  // substituindo o valor antigo da força do personagem pelo novo valor.
  return character;
  // retornando personagem.
}

export function decreaseCharacterDefense(character: Character, newDefense: number, validator: (input: any) => boolean) {
  const isValidCharacter: boolean = validator(character)
  // conferindo se o personagem é válido.

  if (!isValidCharacter) {
    throw new Error('Invalid Character!')
  }

  if (character.defense >= newDefense) {
    throw new Error('A value greater than the previous one must be entered!')
  }
  // conferindo se o novo valor para defesa do personagem é maior do que o valor anterior.
  character.defense = newDefense;
  return character;
}