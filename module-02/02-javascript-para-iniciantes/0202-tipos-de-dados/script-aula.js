var idade = 28;
var simbolo = Symbol();
console.log(typeof simbolo);

var nome = "Otávio";
var sobrenome = "Barbosa";
var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);

// var gols = 1000;
// var frase = 'Romário fez ' + gols + ' gols';
// console.log(typeof frase);

var ano = "2018";
var mes = 8;
console.log(ano + mes);

var melhor = "teste";
var frase1 = 'Esse é o "melhor" jogo';
//Permite usar aspas duplas  (barras invertidas)
console.log(frase1);

var gols = 1000;
var frase2 = `Romário fez ${gols * 2} gols`;
// Com ${} é possível fazer diversas operações
console.log(frase2);
