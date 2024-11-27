/////////////   SOLUCION 1 /////////////
const contarVocales = (cadena) => {
  return cadena.split("").reduce((acc, char) => acc + esVocal(char), 0);
};

const esVocal = (char) => {
  return char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
    ? 1
    : 0;
};

console.log("/////////////   SOLUCION 1 /////////////");

console.log("contarVocales(JavaScript) ->", contarVocales("JavaScript"));
console.log("contarVocales(danza) ->", contarVocales("danza"));
console.log("contarVocales(murcielago) ->", contarVocales("murcielago"));

/* Para este ejercicio nos pareció oportuno primero resolver
la lógica para detectar cuando es una vocal en una función aparte
esVocal() mientras conservamos el contador tipico con el reduce en 
la funcion principal */

/////////////   SOLUCION 2   /////////////
let arrayNumeros = [1, 2, 3, 4, 5, 8, 6, 3, 3, 2, 9, 1, 6, 7, 8];
let arrayNumeros2 = [1, 4, 100];
let arrayNumeros3 = [1, 10, 5];

const maxNum = (arrayNumeros) => {
  return arrayNumeros.reduce((acc, number) => {
    return number > acc ? number : acc;
  }, arrayNumeros[0]);
};
maxNum(arrayNumeros); // 9

console.log("/////////////   SOLUCION 2 /////////////");

// let arrayNumeros = [1, 2, 3, 4, 5, 8, 6, 3, 3, 2, 9, 1, 6, 7, 8];
console.log(
  "let arrayNumeros = [1, 2, 3, 4, 5, 8, 6, 3, 3, 2, 9, 1, 6, 7, 8] -> maxNum(arrayNumeros) -> ",
  maxNum(arrayNumeros)
); // Resultado: 9
// let arrayNumeros = [1, 4, 100];
console.log(
  "let arrayNumeros = [1, 4, 100] -> maxNum(arrayNumeros) -> ",
  maxNum(arrayNumeros2)
); // Resultado 100
// let arrayNumeros = [1, 10, 5];
console.log(
  "let arrayNumeros = [1, 10, 5] -> maxNum(arrayNumeros) -> ",
  maxNum(arrayNumeros3)
); // Resultado 10

/* En este caso, se puede aplicar la lógica del reduce almacenando 
solamente aquellos numeros mayores al valor almacenado. Para este caso,
es muy importante inicializar el valor del acumulador con el valor inicial 
del arreglo o con un valor muy negativo. */

/////////////   SOLUCION 3   /////////////

const calcularMedia = (arrayNumeros) => {
  const suma = arrayNumeros.reduce((acc, number) => acc + number, 0);
  return suma / arrayNumeros.length;
};

console.log("/////////////   SOLUCION 3 /////////////");

console.log(
  "calcularMedia([10, 20, 30, 40]) =",
  calcularMedia([10, 20, 30, 40])
); // Resultado: 25
console.log("calcularMedia([25, 75, 100]) =", calcularMedia([25, 75, 100])); // Resultado: 66.6666666667
console.log("calcularMedia([7, 8, 9, 10]) =", calcularMedia([7, 8, 9, 10])); // Resultado: 8.5

/* Para calcular la media es necesario sumar todos los valores del arreglo
y luego dividirlo de la cantidad de elementos. Para resolver la suma se 
puede acumular los valores del array con un reduce y luego para la cantidad
de elementos se suele usar el tamaño del arreglo con .length */

/////////////   SOLUCION 4   /////////////

const invertirArray = (array) => {
  return array.reverse();
};
console.log("/////////////   SOLUCION 4 /////////////");

console.log("invertirArray([1, 2, 3, 4, 5]) =", invertirArray([1, 2, 3, 4, 5])); // Resultado: [5, 4, 3, 2, 1]
console.log(
  "invertirArray([10, 9, 8, 7, 6]) =",
  invertirArray([10, 9, 8, 7, 6])
); // Resultado: [6, 7, 8, 9, 10]
console.log(
  "invertirArray([limon, pera, manzana]) =",
  invertirArray(["limon", "pera", "manzana"])
); // Resultado: ['manzana', 'pera', 'limon']

/* Para esto hay una función específica que es reverse() que resuelve el
problema sin tener que estar intercambiando índices del arreglo. */

/////////////   SOLUCION 5   /////////////

const eliminarDuplicados = (array) => {
  let arrayLimpio = [];
  array.map((element) => {
    if (!arrayLimpio.includes(element)) {
      arrayLimpio.push(element);
    }
  });
  return arrayLimpio;
};

console.log("/////////////   SOLUCION 5 /////////////");

console.log(
  "eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]) ->",
  eliminarDuplicados([1, 2, 2, 3, 4, 4, 5])
); // Resultado: [1, 2, 3, 4, 5]
console.log(
  "eliminarDuplicados([1, 2, 3, 4, 5]) ->",
  eliminarDuplicados([1, 2, 3, 4, 5])
); // Resultado: [1, 2, 3, 4, 5]
console.log(
  "eliminarDuplicados([2, 2, 2, 2, 2, 2, 2]) -> ",
  eliminarDuplicados([2, 2, 2, 2, 2, 2, 2])
); // Resultado: [ 2 ]

/* En este caso generamos un arreglo auxiliar en el cual vamos 
alamacenando aquellos valores que no estan YA incluidos en el mismo, 
a medida que vamos recorriendo el arreglo con duplicados. */

/////////////   SOLUCION 6   /////////////
const capitalizarPalabras = (cadena) => {
  return cadena
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

console.log("/////////////   SOLUCION 6   /////////////");

console.log(
  "capitalizarPalabras(hola mundo desde javascript) ->",
  capitalizarPalabras("hola mundo desde javascript")
); // Resultado: "Hola Mundo Desde Javascript"
console.log(
  "capitalizarPalabras(Oración con puntuación!) ->",
  capitalizarPalabras("Oración con puntuación!")
); // Resultado: "Oración Con Puntuación"
console.log(
  "capitalizarPalabras(oracion con maYUSculas, interMedias.) ->",
  capitalizarPalabras("oracion con maYUSculas, interMedias.")
); // Resultado: "Oracion Con MaYUSculas, InterMedias."

/* Para poder realizar este ejercicio, resolvimos primero que en una
palabra como detectar el primero caracter con charAt(0) y el metodo 
toUpperCase(). Posteriormente le agregamos el resto de la palabra 
con slice(1). Finalmente, separamos las palabras de la oracion en 
elementos de un arreglo con split(" ") y luego reunificamos todos 
las palabras con join(" ") */

/////////////   SOLUCION 7   /////////////

const fibonacci = (number) => {
  if (number <= 0) {
    return [];
  } else if (number === 1) {
    return [0];
  } else {
    let anterior = 0;
    let actual = 1;
    let fibNumbers = [anterior, actual];

    for (let i = 2; i < number; i++) {
      let aux = anterior + actual;
      fibNumbers.push(aux);
      anterior = actual;
      actual = aux;
    }
    return fibNumbers;
  }
};
console.log("/////////////   SOLUCION 7  /////////////");

console.log("fibonacci(5) = ", fibonacci(5)); // Resultado: [0, 1, 1, 2, 3]
console.log("fibonacci(0) = ", fibonacci(0)); // Resultado: []
console.log("fibonacci(1) = ", fibonacci(1)); // Resultado: [0]
console.log("fibonacci(7) = ", fibonacci(7)); // Resultado: [0, 1, 1, 2, 3, 5, 8]

/* La serie de fibonacci se basa en sumar los dos numero anteriores
de la secuencia. Por tal motivo primero debemos manejar los casos
particulares de 0 y 1 . Luego, mediante un for inicializado en la 
posición 2 del arreglo vamos sumando los dos numeros anteriores 
hasta llegar al número indicado por el usuario. */
