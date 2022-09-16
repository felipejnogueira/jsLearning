// Variaveis de controlde dom
const mes = document.querySelector('#mes');
const h1 = document.querySelector('h1');
const list = document.querySelector('ul');

const css = document.querySelector(':root');
var cssVar = getComputedStyle(css);

console.log(cssVar.getPropertyValue('--bgColor'));
css.style.setProperty('--bgColor', '--purple');
css.style.setProperty('--fontColor', '--white');

mes.addEventListener('change', () => { 
    let choice = mes.value;
    let days = 31;
    console.log(choice);
    if (choice === 'fevereiro'){
        days = 28;
    } else if (choice === "abril" || choice === "junho" || choice === "setembro" || choice === "novembro") {
        days = 30;
    } 

    createCalendar(days, mes.value);
});

function createCalendar(days, choice) {
    list.innerHTML = '';
    h1.textContent = choice;

    for (let i = 1; i <= days; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }    
}

createCalendar(31, 'Janeiro');