
/*
##########################################################################

var cliente = {nome: "Samuel", idade: 18, sexo: "M"}
    
console.log(cliente);
console.log(cliente.nome);
console.log(cliente.idade);
console.log(cliente.sexo);

##########################################################################

//array de objetos
var cliente = [
    {
        nome: "Samuel",
        idade: 18,
        sexo: "M"
    },
    {
        nome: "Fernando",
        idade: 20,
        sexo: "M"
    }
]

for (const i in cliente) {
    console.log(cliente[i]);
    console.log(cliente[i].nome);
    console.log(cliente[i].idade);
    console.log(cliente[i].sexo);    
}

##########################################################################

//converte o array para String, porém consigo fazer a separação dos 
//elementos por algum caracter, espaçamento...
var lista = ["maçã", "banana", "uva", "melão"];
console.log(lista);
console.log(lista.join("-"));

##########################################################################

//converte o array para String
var lista = ["maçã", "banana", "uva", "melão"];
console.log(lista);
console.log(lista.toString());

##########################################################################
//Utilizado para ordenar de tras para frente os elementos de um array
var lista = ["maçã", "banana", "uva", "melão"];
console.log(lista.reverse());

##########################################################################
//length utilizado para sabermos o tamanho do array
var lista = ["maçã", "banana", "uva", "melão"];
console.log(lista.length);

##########################################################################

//Utilizado para remover o último elemento de um array. Remove o melão
var lista = ["maçã", "banana", "uva", "melão"];
lista.pop();
console.log(lista);

##########################################################################

//Adicionando elementos a um array (melancia e abacate)
var lista = ["maçã", "banana", "uva", "melão"];
lista.push("melancia", "abacate");
console.log(lista);

##########################################################################

var lista = ["maçã", "banana", "uva", "melão"];
console.log(lista[2]);

##########################################################################

var lista = ["maçã", "banana", "uva", "melão"];
console.log(lista);

##########################################################################

//colocando todo o valor da variavel em minúsculo
var frase = "Internacional é o MELHOR TIME do brasileirão";
console.log(frase.toLowerCase());

##########################################################################

//colocando todo o valor da variavel em maiúsculo
var frase = "Internacional é o melhor time do brasileirão";
console.log(frase.toUpperCase());

##########################################################################

//replace trocando o valor X e colocando o valor Y em uma variavel string
var frase = "Flamengo é o melhor time do brasileirão";

console.log(frase.replace("Flamengo", "Internacional"));
alert(frase.replace("Flamengo", "Juventude"));

##########################################################################

var frase = "Inter e o melhor time do mundo";
console.log(frase);
alert(frase);

##########################################################################

var nome = 'Samuel';
alert(`seja bem vindo ${nome}!`);// está sendo usado template Strings

var idade1 = 29;
var idade2 = 2;
var soma = idade1 + idade2;

alert(`A soma de ${idade1} + ${idade2} é igual a ${soma} ou ${idade1 + idade2}`);
*/