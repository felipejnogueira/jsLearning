// Gerador de histórias aleatórias
// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    // Variaveis com parte da história aleatória
    const itemX = insertX[randomValueFromArray];
    const itemY = insertY[randomValueFromArray];
    const itemZ = insertZ[randomValueFromArray];

    let nome = 'Bob';
    let weight = 0;
    let temperature = 0;
    
    if(customName.value !== '') {
        nome = customName.value;
    }

    if(document.getElementById("uk").checked) {
        weight = Math.round(300 / 14) + ' stones';
        temperature =  Math.round( (math.random() * 100  - 32) * 5/9) + ' celsius';
    } else {
        weight = '300 pounds';
        temperature = '94 farenheit';
    }

    story.textContent = `It was ${temperature} outside, so ${itemX} went for a walk. When they got to ${itemY}, they stared in horror for a few moments, then ${itemZ}. ${nome} saw the whole thing, but was not surprised — ${itemX} weighs ${weight} pounds, and it was a hot day.`;
    story.style.visibility = 'visible';
}