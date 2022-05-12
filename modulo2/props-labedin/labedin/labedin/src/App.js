import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaFoto from './img-myself/hello.jpeg';
import styled from 'styled-components';



const App1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const AppDiv2 = styled.div`
  width: 40vw;
  margin: 10px 0;
`

const AppH2 = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`


function App() {
  return (
    <App1>
      <AppDiv2>
        <AppH2>Dados pessoais</AppH2>
        <CardGrande 
          imagem={MinhaFoto}
          nome="Maria Eduarda" 
          descricao="Olá! Me chamo Maria Eduarda, tenho 22 anos, natural de Minas Gerais, e atualmente estudante de Desenvolvimento Full Stack da Labenu."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </AppDiv2>


       <div className="page-section-container">

        <CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/725/725643.png"
        nome="Email:"
        descricao="eduardaloopes2011@hotmail.com"
        />
 
        <CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/17/17589.png"
        nome="Endereço:"
        descricao="Minas Gerais"
        />
        </div>




      <div className="page-section-container">
        <AppH2>Experiências profissionais</AppH2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Estágios em academias" 
          descricao="Cursei educação física durante 3 anos e tive a oportunidade de estagiar em algumas academias nesse período." 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" 
          nome="Inglês" 
          descricao="Lecionei inglês para adolescentes por um período." 
        />
      </div>

      <div className="page-section-container">
        <AppH2>Minhas redes sociais</AppH2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </App1>
  );
}

export default App;
