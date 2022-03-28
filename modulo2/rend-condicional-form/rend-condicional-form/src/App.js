import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import { createGlobalStyle } from 'styled-components';


const Botao = styled.button`
display: flex;
justify-content:center;
justify-items:center;
justify-self:center;
margin-top: 5px;
margin-left: 635px;
`









class App extends React.Component{

  state = {
    etapas: 1,

  }


renderizaEtapa = () => {
    switch (this.state.etapas)
            {
    case 1:
     return <Etapa1 />
   
    case 2:
     return <Etapa2 />
    
    case 3:
     return <Etapa3 />

    case 4:
     return <Final />

            }
}


irParaProximaEtapa = () => {
this.setState({etapas: this.state.etapas + 1});

}

// tirarBotao = () => {
// if(this.irParaProximaEtapa !== 4){
//   return Botao
// }else{
//   return 0
// }
// }


  render() {

  return (

    <div>

    <div>
      {this.renderizaEtapa()}
    </div>
     {/* <Botao onClick={this.irParaProximaEtapa || this.tirarBotao}>Próxima etapa</Botao> */}
     {this.state.etapas !== 4 && <Botao onClick={this.irParaProximaEtapa}>Próxima etapa</Botao>}
    </div>

    );
  }
}



export default App;
