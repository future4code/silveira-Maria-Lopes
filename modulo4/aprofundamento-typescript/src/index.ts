//EXERCÍCIO 1:

//a)
// const string: string = 12
//erro com a seguinte mensagem: "o tipo number não pode ser atribuído ao tipo string";

//b) 
let meuNumero: number = 12;
//Para aceitar também uma string:
let meuNumero2: number | string = "amor";

//c)
enum CoresArcoIris {
        VERMELHO = "vermelho", 
        LARANJO = "laranjo",
        AMARELO = "amarelo",
        VERDE = "verde",
        AZUL = "azul",
        VIOLETA = "violeta"
}

type Pessoa = {
    name: string,
    age: number,
    favoriteColor: CoresArcoIris
}

const pessoa: Pessoa = {
    name: "Eduarda",
    age: 20,
    favoriteColor: CoresArcoIris.VIOLETA
}

const pessoa2: Pessoa = {
    name: "Alessandra",
    age: 30,
    favoriteColor: CoresArcoIris.VERMELHO
}

const pessoa3: Pessoa = {
    name: "Alex",
    age: 40,
    favoriteColor: CoresArcoIris.VERDE
}

//d)Essa questão está feita na linha 13!


//EXERCÍCIO 2:
//a)
function obterEstatisticas(numeros: number[]): any {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas([20, 10]))
//Coloquei como entrada number[] pois sem os colchetes estava dando erro pelo uso
//de métodos de array como o length.
//A saída no terminal foi: maior: 20, menor: 10, media: 15.

//b)Type Aliases. É usada para evitar repetições. O type é apenas um "esqueleto" que definirá as 
//propriedades que aquele tipo deve ter.

//c)
type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros:number[]) => number[]
}


//EXERCÍCIO 3:
//a)
/*
const posts = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]
*/

type Post = {
    autor: string,
    texto: string
}

const posts: Post[] = [{
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
      },
      {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
      },
      {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
      },
      {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
      },
      {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
}]

//b)

/*
function buscarPostsPorAutor(posts, autorInformado) {
  return posts.filter(
    (post) => {
      return post.autor === autorInformado
    }
  )
}
*/

function buscarPostsPorAutor(posts:any, autorInformado:string): any {
    return posts.filter(
      (post:any) => {
        return post.autor === autorInformado
      }
    )
  }
  console.log(buscarPostsPorAutor(posts, "Lord Voldemort"))

//EXERCÍCIO 4:
