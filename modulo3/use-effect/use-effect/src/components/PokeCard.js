import React, { useState, useEffect } from "react";
import axios from "axios";




function PokeCard(props) {
    const [pokemon, setPokemon] = useState({})


    const pegaPokemon = pokeName => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(response => {
                setPokemon(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    };


    useEffect(() => {
        pegaPokemon(props.pokemon);
    }, []
    )
    // referente ao método didMount.
    // Método que roda após a montagem do componente


    // useEffect(() => {
    //     const pegaPokemon = pokeName => {
    //         axios
    //             .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    //             .then(response => {
    //                 setPokemon(response.data);
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             });
    //     };
    //     pegaPokemon(props.pokemon)
    // }, [props.pokemon])



    useEffect(() => {
        pegaPokemon(props.pokemon)
    }, [props.pokemon])

    // referente ao didUpdate
    // aqui, é feita uma verificação da props anterior com a props atual. 
    // Caso a props anterior seja diferente da props atual,
    // a função pegaPokemon é chamada.
    // será usado somente quando uma prop mudar.

    // vai executar o props.pokemon da função, que vem da API, e se for atualizado,
    // vai executar a [props.pokemon] referente ao estado lá em cima, que está sendo atualizado 
    // conforme o usuário clica em outro pokemon.


    return (
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight} Kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
        </div>
    );
}

export default PokeCard;
