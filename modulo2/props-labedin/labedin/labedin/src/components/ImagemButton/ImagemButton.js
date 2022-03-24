import React from 'react';
import './ImagemButton.css'
import styled from 'styled-components';


const ImagemButton1 = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`

const ImagemButtonImagem = styled.img`
    width: 30px;
    margin-right: 10px;
`




function ImagemButton(props) {
    return (
        <ImagemButton1>
            <ImagemButtonImagem src={ props.imagem } />
            <p>{ props.texto }</p>
        </ImagemButton1>

    )
}

export default ImagemButton;