import React from 'react';

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ limit, total, offset, setOffset }) => {
    const paginaAtual = offset ? (offset / limit) + 1 : 1;
    const totalPaginas = Math.ceil(total / limit);
    const primeiroBotao = Math.max(paginaAtual - MAX_LEFT, 1);

    return (
        <div>
            <ul>
                {Array.from({ length: MAX_ITEMS })
                    .map((_, index) => index + primeiroBotao)
                    .map((totalPagina) => (
                        <li>
                            <button onClick={() => setOffset((totalPagina -1) * limit)}
                            >
                                {totalPagina}
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Pagination;

// offset = por exemplo, se eu to na página 2, tenho um offset de 10,
// que é o número de itens na página 1.
// se estou na página 3, tenho um offset de 20, e assim sucessivamente.
// quando estiver na página 1, o offset será de 0.

// na página 1, como o offset será de 0, preciso fazer a verificação
// pra saber se existe, que foi feita na const paginaAtual.

// na const totalPaginas, o total de páginas dividido pelo limite de página,
// por ex: se eu tenho 120 páginas, dividido por 12, eu sei q tenho 10 páginas.
// porém, sempre que sobrar itens, eu preciso pegar esses itens e jogar para a
// próxima página. Sempre que for uma soma quebrada, eu preciso arredondar para cima.
// isso foi feito na const totalPaginas.

// na variável primeiroBotao, eu passo o argumento 1 depois da soma de página atual
// com max left porque quero que sempre seja no mínimo página 1.
// por ex, se eu to na página 3, não tem como voltar 4 páginas que é a soma do nosso
// max itens. então, faço essa soma do primeiroBotao, para o mínimo da página ser 1.