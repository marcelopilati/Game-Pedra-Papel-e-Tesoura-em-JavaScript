import input from 'readline-sync';

console.log("Bem vindo ao game Pedra, Papel e Tesoura");

console.log("Escolha uma opcao: ");
console.log("1 - Pedra");
console.log("2 - Papel ");
console.log("3 - Tesoura");

let jogador = input.question("Opcao do jogador: ");

let computador = Math.floor(Math.random() * 3);
console.log("Opcao do computador: " + computador);

if(computador == jogador){
    console.log("EMPATE");
}
else if(computador == 1 && jogador == 2){
    console.log("JOGADOR VENCEU");
}
else if(computador == 1 && jogador == 3){
    console.log("COMPUTADOR VENCEU");
}
else if(computador == 2 && jogador == 1){
    console.log("COMPUTADOR VENCEU");
}
else if(computador == 2 && jogador == 3){
    console.log("JOGADOR VENCEU");
}
else if(computador == 3 && jogador == 1){
    console.log("JOGADOR VENCEU");
}
else if(computador == 3 && jogador == 2){
    console.log("COMPUTADOR VENCEU");
}
else{
    console.log("OPCAO INVALIDA");
}

