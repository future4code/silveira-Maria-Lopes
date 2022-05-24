//EXERCÍCIO 2:

const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])
const operacao = process.argv[2];

switch(operacao) {
    case "soma":
        console.log(num1+num2);
        break;
    case "subt":
        console.log(num1-num2);
        break;
    case "mult": 
    console.log(num1*num2);
        break;
    default:
        console.log(num1/num2);
        break;
}