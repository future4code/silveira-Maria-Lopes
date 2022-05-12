import React from 'react';
import './CardGrande.css'
import styled from 'styled-components';


const GrandeContainerDiv = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const GrandeContainerImagem = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const GrandeContainerH4 = styled.h4`
    margin-bottom: 15px;
`

const GrandeContainerDivDeNovo = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;

`



function CardGrande(props) {
    return (
        <GrandeContainerDiv>
            <GrandeContainerImagem src={ props.imagem } />
            <div>
                <GrandeContainerH4>{ props.nome }</GrandeContainerH4>
                <GrandeContainerDivDeNovo>{ props.descricao }</GrandeContainerDivDeNovo>
            </div>
        </GrandeContainerDiv>
    )
}

export default CardGrande;