
/* 
## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

const nomeHeroi = "Lucas";
let xpLucas = 6546;
let nivelPatente;


if(xpLucas <= 1000){
  nivelPatente = "Ferro";
}else if(xpLucas >= 1001 && xpLucas <= 2000){
  nivelPatente = "Bronze";
}else if(xpLucas >= 2001 && xpLucas <= 5000){
  nivelPatente = "Prata";
}else if(xpLucas >= 5001 && xpLucas <= 7000){
  nivelPatente = "Ouro";
}else if(xpLucas >= 7001 && xpLucas <= 8000){
  nivelPatente = "Platina";
}else if(xpLucas >= 8001 && xpLucas <= 9000){
  nivelPatente = "Ascendente";
}else if(xpLucas >= 9001 && xpLucas <= 10000){
  nivelPatente = "Imortal";
}else if(xpLucas <= 10001){
  nivelPatente = "Radiante";
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelPatente +".");