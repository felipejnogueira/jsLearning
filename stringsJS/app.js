// String
const string = 'The revolution will not be televised.'
console.log(string);

const sgl = 'Single quotes';
const dbl = "Double quotes";

console.log(sgl);
console.log(dbl);

// escaping characters in a string
const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);

// Concatenating strings
let nome = 'Chris';
let greeting = `Hello, ${nome}`;
console.log(greeting);

const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;
console.log(joined);

// Concatenation in context
const button = document.querySelector('button');

function greet() {
    let nome = prompt('What is your name?');
    alert(`Hello ${nome}, nive to see you!`);    
}

button.addEventListener('click', greet);

// Concatenating with +
greeting = 'Hello';
nome = 'Felipe'
console.log(greeting + ', ' + nome);

// Number x String
nome = 'Front ';
const number = 242;
console.log(`${nome}${number}`);

const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum);

// expressions
const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
let output = `I like the song ${song}. I gave it a score of ${score/highestScore * 100}%.`;
console.log(output);

// multiline
output = `I like the song ${song}. 
I gave it a score of ${score/highestScore * 100}%.`;
console.log(output);

output = `I like the song ${song}.\nI gave it a score of ${score/highestScore * 100}%.`;
console.log(output);