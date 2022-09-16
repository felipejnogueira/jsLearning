// IF condition
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true){
    childsAllowance = 10;
} else {
    childsAllowance = 5;
}

console.log(childsAllowance);

// Nested if elseif condition
const select = document.querySelector('select');
const para = document.querySelector('p');
const temp = document.querySelector('#temperature');

console.log(temp.value);

select.addEventListener('change', setWeather);

/*
function setWeather() {
    const choice = select.value;

    if (choice === 'sunny' && temp.value < 86){
        para.textContent = `It is ${temp.value} degrees outside - nice and sunny. Wear shorts! Go to the beach, or the park, and get an ice cream.`;
    } else if (choice === 'sunny' && temp.value >= 86) {    
        para.textContent = `It is ${temp.value} degrees outside - REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;            
    } else if (choice === 'rainy') {
        para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.'
    } else if (choice === 'snowing') {
        para.textContent = 'The snow is coming down - it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.'
    } else if (choice === 'overcast') {
        para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.'
    } else {
        para.textContent = '';
    }
}
*/

// OR and NOT condition
const iceCreamVanOutside = true;
const houseStatus = 'on fire';

if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
    console.log('You should leave the house quickly.');
} else {
    console.log('Probably should just stay in then.');
}

// SWITCH .. CASE
function setWeather() {
    const choice = select.value;

    switch (choice) {
        case 'sunny':
            if (temp.value < 86) {
                para.textContent = `It is ${temp.value} degrees outside - nice and sunny. Wear shorts! Go to the beach, or the park, and get an ice cream.`;
            } else {
                para.textContent = `It is ${temp.value} degrees outside - REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
            }
            break;
        case 'rainy':
            para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
            break;
        case 'snowing':
            para.textContent = 'The snow is coming down - it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
            break;
        case 'overcast':
            para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
            break;
        default:
            para.textContent = '';
    }
}

// Ternary operator
// condition ? run this code : run this code instead
const theme = document.querySelector('#theme');
const html = document.querySelector('html');

theme.addEventListener('change', () => (theme.value === 'black') ? update('black', 'white') : update('white', 'black'));

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}
