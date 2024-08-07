var pessoa = {
  nome: 'Otávio',
  idade: 23,
}

console.log(pessoa);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

// var height = 120;
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2;
  }
}

menu.backgroundColor = '#000';

menu.esconder = function() {
  console.log('Escondi')
}
var bg = menu.backgroundColor;

/*
- Os métodos não precisam escrever "function" antes, é só escrever
o nome do método com () {} 
- É possível add novos valores para as propriedades do objeto
ex: menu.backgroundColor = '#000';
- Além disso é possível adicionar novos métodos e propriedades fora 
do objeto ex:
menu.esconder = function() {
  console.log('Escondi')
}
*/

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dados = {
  nome: 'Otávio',
  sobrenome: 'Barbosa Ferreira',
  mostrarNome() {
    return console.log(this.nome + " " + this.sobrenome);
  }
  
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.mostrarIdade = function() {
  return console.log(23)
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir(viuHomem) {
    viuHomem ? "Latiu" : ""
  }
}


