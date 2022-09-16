// Variaveis de controlde dom
const mes = document.querySelector('#mes');
const h1 = document.querySelector('h1');
const list = document.querySelector('ul');
const theme = document.querySelector('#theme')
const css = document.querySelector(':root');
let tema;

function trocaTema() {
    tema = theme.value;

    switch (tema) {
        case 'white':
            css.style.setProperty('--bgColor', 'var(--white)');
            css.style.setProperty('--fontColor', 'var(--black)');
            break;
        case 'black':
            css.style.setProperty('--bgColor', 'var(--lightBlack)');
            css.style.setProperty('--fontColor', 'var(--white)');
            break;
        case 'purple':
            css.style.setProperty('--bgColor', 'var(--purple)');
            css.style.setProperty('--fontColor', 'var(--white)');
            break;
        case 'yellow':
            css.style.setProperty('--bgColor', 'var(--yellow)');
            css.style.setProperty('--fontColor', 'var(--black)');
            break;
        case 'psych':
            css.style.setProperty('--bgColor', 'var(--purple)');
            css.style.setProperty('--fontColor', 'var(--lime)');
            break;
        default:
            css.style.setProperty('--bgColor', 'var(--white)');
            css.style.setProperty('--fontColor', 'var(--black)');            
    }
}

theme.addEventListener('change', trocaTema);

mes.addEventListener('change', () => { 
    let choice = mes.value;
    let days = 31;

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