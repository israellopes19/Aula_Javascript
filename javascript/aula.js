var entrada = require("readline-sync");

//var nome = entrada.question("Qual o seu nome?");
//var sobre = entrada.question("Qual o seu sobrenome?")

//console.log("Seu nome completo é",nome,sobre);

var num = parseInt(entrada.question("Digite um numero:"));
var num2 = parseInt(entrada.question("Digite outro numero:"));
console.log(`A soma dos numeros interos é ${num+num2}`)
