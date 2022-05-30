import styled from "styled-components";



export const ImgHome = styled.img`
height: 70px;
width: 55px;
cursor: pointer;
overflow: hidden;
margin-right: -5px;
margin-left: 10px;
-webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;
   :hover {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);}
`

export const ImgLogo = styled.img`
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
    width: 325px;
    margin-bottom: 10px;
    margin-left: -15px;
    display: flex;
    justify-content: space-between;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 285px;
    margin-top: 10px;     
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
export const Button = styled.button`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const DivContainer = styled.div`
/* display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 45px; */
border: 2px ridge black;
width: 403px;
height: 600px;
border-radius: 7px;
box-shadow: 2px 2px 6px silver;
background-color: ghostwhite;
margin-bottom: 30px;
margin-top: 10px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 360px;     
    }
`

export const DivCaixinha = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 3px;
width: 400px;
margin-top: 60px;
margin-bottom: 20px;
box-shadow: 2px 2px 1px 1px darkgray; 
padding: 0px 5px;
    img {
        height: 90%;
        border: 40px;
        box-shadow: 2px 2px 2px 2px darkgray; 
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 360px;     
    }
`

export const DivImg = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
position: relative;
height: 60px;
margin-left: 8px;
margin-bottom: 60px;
box-shadow: 2px 2px 1px 1px darkgray; 
padding: 0px 5px;
    img {
        height: 95%;
        border: 40px;
        box-shadow: 2px 2px 2px 2px darkgray; 
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 337px;     
    }
`

export const ImgMatch = styled.img`
height: 100%;
width: 50px;
margin-right: 10px;
border-radius: 50%;
`

export const PersonMatch = styled.li `
display: flex;
position: relative;
height: 50px;
display: flex;
list-style: none;
width: 100%;
cursor: pointer;
margin-top: 10px;
margin-left: 5px;
-webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;
   :hover {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);}
`

export const ImgBrokenHeart = styled.img`
height: 100px;
width: 100px;
display: flex;
justify-content:center;
align-items: center;
margin-top: 200px;
margin-left: 150px;
margin-bottom: 20px;

`