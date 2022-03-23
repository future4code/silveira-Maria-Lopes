import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Post2 from './components/Post2/Post2'
import Post3 from './components/Post3.js/Post3'
import PrimeiraFoto from './img/primeirafoto.png'
import SegundaFoto from './img/segundafoto.png'
import TerceiraFoto from './img/terceirafoto.png'
import QuartaFoto from './img/quartafoto.png'


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  `
  
const MainContainer2 = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
          />
        <Post2
          nomeUsuario={'Maria Eduarda'}
          fotoUsuario={TerceiraFoto}
          fotoPost={SegundaFoto}
          />
        <Post3
          nomeUsuario={'Duda'}
          fotoUsuario={QuartaFoto}
          fotoPost={PrimeiraFoto}
        />
      </MainContainer>
    );
  }
}

// class Post2 extends React.Component {
//   render(){
//     return(
//        <MainContainer2>
//          <Post2
//           nomeUsuario2={'Maria Eduarda'}
//           fotoUsuario2={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcasavogue.globo.com%2FLazerCultura%2Fnoticia%2F2020%2F06%2Festudio-nickelodeon-oficializa-bob-esponja-e-gay.html&psig=AOvVaw0QAUuynxFqmz7CK_Xz237j&ust=1648135777825000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiowa_G3PYCFQAAAAAdAAAAABAJ'}
//           fotoPost2={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fobservatoriodocinema.uol.com.br%2Fseries-e-tv%2F2021%2F08%2Fbob-esponja-reclama-que-fas-erram-o-nome-dele&psig=AOvVaw0QAUuynxFqmz7CK_Xz237j&ust=1648135777825000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiowa_G3PYCFQAAAAAdAAAAABAO'}
//         />
//        </MainContainer2>
//     );
//   }
// }

export default App;
