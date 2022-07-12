vamos nos relemebrar dos Mocks. 

Eles são muito importantes quando vamos realizar testes unitários, pois permitem que realizemos o teste sem utilizar nenhuma implementação das dependências, garantindo que ele seja isolado e específico para a função/classe que estamos tentando testar.
Para criar um  Mock no Jest, temos que usar a função jest.fn, como mostrado abaixo:

test("Showing jest.fn", () => {
	const mock = jest.fn(() => {
		const user = {
				name: "Astrodev",
				age: 29
		}
		return user
	})
})

obs: essas respostas são para futuras consultas.


Exercício 4
letra a) devemos criar um mock para a função performAttack, pois validateCharacter será a função usada dentro da função performAttack para validar os personagens.
