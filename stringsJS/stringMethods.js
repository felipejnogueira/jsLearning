// length
const browserType = 'mozilla';
console.log(browserType.length);

// char
console.log(browserType[3]);

// last char
console.log(browserType[browserType.length-1])

// substring
if (browserType.includes('zilla')) {
    console.log('Founde zilla!');
} else {
    console.log('No zilla here!');
}

// começa/termina com substring
if (browserType.startsWith('zilla')) {
    console.log('Founde zilla!');
} else {
    console.log('No zilla here!');
}

if (browserType.endsWith('zilla')) {
    console.log('Founde zilla!');
} else {
    console.log('No zilla here!');
}

// position of substring | -1 se não encontrar
const tagline = 'MDN - Resources for developers, by developers.';
console.log(tagline.indexOf('developers'));

console.log(tagline.indexOf('x'));

const primeiraOcorrencia = tagline.indexOf('developers');
const segundaOcorrenia = tagline.indexOf('developers', primeiraOcorrencia + 1);

console.log(primeiraOcorrencia);
console.log(segundaOcorrenia);

// slice
console.log(browserType.slice(1, 4));
console.log(browserType.slice(2));

// changing case
const radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

// replace
const updated = browserType.replace('moz', 'van');

console.log(browserType);
console.log(updated);

let quote = 'To be or not to be';
quote = quote.replaceAll('be', 'code');
console.log(quote);

