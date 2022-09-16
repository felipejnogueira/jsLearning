// tipos de numeros são iguais
const myInt = 5;
const myFloat = 6.667;

console.log(typeof myInt);
console.log(typeof myFloat);

// fixando casas decimais
const lotsDecimal = 1.76658462359;
console.log(lotsDecimal);

// arredonda valor para cima
const twoDecimal = lotsDecimal.toFixed(2);
console.log(twoDecimal);

// variavel está como string
let myNumber = '74';
myNumber = Number(myNumber) + 3;

// increment
let guessCount = 3;
guessCount++;
console.log(guessCount);

guessCount = 12;
guessCount--;
console.log(guessCount);
