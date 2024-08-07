var possuiGradruacao = false;
var possuiDoutorado = true;

if (possuiGradruacao) {
  console.log("É verdadeiro");
} else if (possuiDoutorado) {
  console.log("Possui Doutorado");
} else {
  console.log("Não possui nada");
}

var nome = "10kg" / 10;

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

if (!possuiGradruacao) {
  console.log(possuiGradruacao);
  console.log("Não possui graduação");
}

var x = 10;

console.log(x !== 11);

if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log("Verdadeiro", condicional);
} else {
  console.log("Falso");
}

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional2);

/*
  !! Ajuda na verificação do valor da variável (Truthy ou Falsy)
  Em comparações, sempre prestar atenção se está começando com a "seta",
  evitando criar uma arrow function por engano.
---------------------------------------------------------
  true && true; // true
  true && false; // false
  false && true; // false
  'Gato' && 'Cão'; // 'Cão' -> Aqui é retornado o último valor verdadeiro
  (5 - 5) && (5 + 5); // 0 -> Por 0 ser Falsy, ele é retornado (0 -> falso)
  'Gato' && false; // false 
  (5 >= 5) && (3 < 6); // true
---------------------------------------------------------
  true || true; // true
  true || false; // true
  false || true; // true
  'Gato' || 'Cão'; // 'Gato' -> Retorna o primeiro valor verdadeiro
  (5 - 5) || (5 + 5); // 10
  'Gato' || false; // Gato
  (5 >= 5) || (3 < 6); // true
*/
