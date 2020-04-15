function mensagem(){
    alert("Obrigado por clicar");
    document.getElementById("mensagemH2").innerHTML = "Obrigado por clicar";
}

function redirecionar() {
    window.open("https://google.com.br");
    window.location.href = "https://google.com.br";
}


function trocar(elemento){
    elemento.innerHTML = "Texto Alterado"; 
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"; 
}

function load(){
    alert("Página Carregada");
}

function alteracao(elemento){
    console.log(elemento.value);
}

/*function trocar(){
    document.getElementById("mouseMover").innerHTML = "teste alterado"; 
}

function voltar(){
    document.getElementById("mouseMover").innerHTML = "Passe o moude aqui"; 
}
*/

/*
                  FUNÇÕES
####################################################################################

function soma(n1, n2){
    return n1 + n2
}    

alert(soma(10, 35));
console.log(soma(10, 35));

####################################################################################

function usarReplace(frase, descricao, nova_descricao){
    return frase.replace(descricao, nova_descricao);
}

console.log(usarReplace("A rapaziada da feita é muito chata", "chata", "bacana"));

####################################################################################

function validaIdade(idade){
    var MaiorIdade = 18;
    var validar;

    if (idade >= MaiorIdade) {
        return validar = true;
    }else{
        return validar = false;
    }
}    

var idade = prompt("Informe sua idade");
console.log(validaIdade(idade));

*/


