import React from 'react';
import './CardPequeno.css';
import styled from 'styled-components';


const p1 = styled.p `
    padding: 0px 10px;
    margin-top: 0;
`

const CardPequenoContainerH4 = styled.div `
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
`

const CardPequenoContainerImagem = styled.img`
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
`;

const CardPequenoContainer = styled.div`
 display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 70px;
`



function CardPequeno(props) {
    return (
        <CardPequenoContainer> 
            <CardPequenoContainerImagem src={ props.imagem } />
            <div>
            <CardPequenoContainerH4>{ props.nome }</CardPequenoContainerH4>
               <p1>{ props.descricao }</p1>
            </div>
            </CardPequenoContainer>
    )
}



export default CardPequeno; 