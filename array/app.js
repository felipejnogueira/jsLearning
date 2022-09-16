// Declaração de array
 var sequence = [1, 1, 2, 3, 5, 8, 13];
 var random = ['tree', 795, [0, 1, 2]];

// Lendo array
let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];

console.log(shopping);
console.log(shopping[2]);

// Modificando array
shopping[3] = 'tahine';
console.log(shopping[3]);

// Acessando array[array]
console.log(random[2][1]);

// Loop com lenght
for (var i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
}

// --------------------- METODOS ------------------------ //

// Convertendos string em array
var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
var myArray = myData.split(',');
console.log(myData);

// Convertendo array em string
var myString = myArray.join(',');
console.log(myString);
console.log(myArray.toString());


// Add item na array
myArray.push('Cardiff');
myArray.push('Bradford', 'Brighton');
console.log(myArray);


// Ao fazer um push ele retorna o lenght da array
var newLength = myArray.push('Bristol');
console.log(newLength);


// Remover ultimo item da array
myArray.pop();
console.log(myArray.length);


// .pop() retorna item quando o remove
var lastItem = myArray.pop();
console.log(lastItem);


// unshift() add no inicio da array
myArray.unshift('Edinburgh');
console.log(myArray);


// shift() remove do inicio da array
lastItem = myArray.shift();
console.log(lastItem);