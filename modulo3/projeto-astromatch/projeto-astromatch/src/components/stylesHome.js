import styled from "styled-components";


export const DivMatches = styled.div`
 display: flex;
 flex-direction: column;
 padding: 20px 20px 0px;
 `

export const DivCaixinha = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
height: 60px;
box-shadow: 2px 2px 1px 1px darkgray; 
padding: 0px 5px;
    img {
        height: 90%;
        border: 40px;
        box-shadow: 2px 2px 2px 2px darkgray; 
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            display: flex;
            flex-direction: center;
            align-items: center;
            background-color: white;
                     
    }
`

export const DivContainer = styled.div`
border: 2px ridge black;
width: 403px;
height: 627px;
border-radius: 7px;
box-shadow: 2px 2px 6px silver;
background-color: ghostwhite;
margin-bottom: 40px;
margin-top: 10px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 360px;     
    height: 600px;
    }
`

export const Button = styled.button`
display: flex;
flex-direction: center;
align-items: center;
justify-content: center;
margin: 0 auto;
margin-top: 15px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin-top: 30px;  
    }
`

export const DivPai = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
background-color: silver;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            display: flex;
            flex-direction: center;
            align-items: center;
            background-color: white;
    }
`


export const LikeButton = styled.img`
height: 60px;
width: 60px;
cursor: pointer;
padding: 5px;
margin-bottom: -10px;

:active {
    position: relative;
    top: 3px;
}
-webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;
   :hover {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);}

`
export const DeslikeButton = styled.img`
height: 50px;
width: 50px;
cursor: pointer;
padding: 5px;
margin-bottom: -10px;

:active {
    position: relative;
    top: 2px;
}
-webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;
   :hover {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);}
`

export const ImgMatch = styled.img`
height: 400px;
width: 380px;
margin-top: 10px;
margin-left: 8px;
box-shadow: 3px 3px 3px 3px darkgray;
transition: transform .5s ease;
   :hover {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);}
   @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 340px;   
    height: 365px;  
    }
`

export const ImgButton = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin: 5px;
margin-bottom: -2px;
`

export const ImgPeople = styled.img`
height: 60px;
width: 60px;
cursor: pointer;
overflow: hidden;
-webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;
   :hover {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);}
   @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 50px;   
    height: 35px;  
    margin-right: 1px;
    }
`

export const DivTexto = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 10px;
font-size: 23px;
font-family: sans-serif;
`

export const DivBio = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
border-top: 2px solid #000;
height: 42px;
width: 399;
text-align: center;
font-family: sans-serif;
`

export const ImgLogo = styled.img`
width: 320px;
margin-top: 3px;
margin-bottom: 3px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 285px;   
    height: 28px;  
    }
`

export const DivTextoFinal = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
font-family: Andale Mono, monospace;
margin-top: 120px;
margin-left: 15px;
`